<template>
  <section>
    <h2>Endereço de Envio</h2>
    <ErroNotificacao :erros="erros" />
    <UsuarioForm>
      <button class="btn" @click.prevent="finalizar">
        Finalizar Compra
      </button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
  name: "finalizarCompra",
  components: {
    UsuarioForm
  },
  data() {
    return {
      erros: []
    };
  },
  props: {
    produto: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(["usuario"]),
    compra() {
      return {
        comprador_id: this.usuario.email,
        vendedor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          cep: this.usuario.cep,
          rua: this.usuario.rua,
          numero: this.usuario.numero,
          bairro: this.usuario.bairro,
          cidade: this.usuario.cidade,
          estado: this.usuario.estado
        }
      };
    }
  },
  methods: {
    criarTransacao() {
      return api.post("/transacao", this.compra).then(() => {
        this.$router.push({ name: "UsuarioCompras" });
      });
    },
    async criarUsuario() {
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
        await this.$store.dispatch("logarUsuario", this.$store.state.usuario);
        await this.$store.dispatch("getUsuario");

        await this.criarTransacao();
      } catch (error) {
        this.erros.push(error.response.data.message);
      }
    },
    finalizar() {
      this.erros = [];
      if (this.$store.state.login) {
        this.criarUsuario();
      }
      this.criarTransacao();
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 40px 0 20px;
}

.btn {
  background: #e80;
}
</style>
