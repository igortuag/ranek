<template>
  <section>
    <h2>Lista de produtos</h2>
    <ProdutoAdicionar />
    <h2>Seus Produtos</h2>
    {{ usuario_produtos }}
  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "UsuarioProdutos",
  components: {
    ProdutoAdicionar
  },
  computed: {
    ...mapState(["login", "usuario", "usuario_produtos"])
  },
  methods: {
    ...mapActions(["getUsuarioProdutos"])
  },
  created() {
    this.getUsuarioProdutos();
  }
};
</script>

<style scoped></style>
