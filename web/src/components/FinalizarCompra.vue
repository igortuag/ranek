<template>
  <section>
    <h2>Endereço de Envio</h2>
    {{ produto }}
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
        endereço: {
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
      api.post("/transacao", this.compra).then(() => {
        this.$router.push({ name: "UsuarioCompras" });
      });
    },
    finalizar() {
      this.criarTransacao();
    }
  }
};
</script>

<style lang="scss" scoped></style>
