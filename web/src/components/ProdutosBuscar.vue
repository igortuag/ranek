<template>
  <form>
    <input name="busca" id="busca" type="text" v-model="busca" />
    <input
      type="submit"
      id="lupa"
      value="Buscar"
      @click.prevent="buscarProduto"
    />
  </form>
</template>

<script>
export default {
  name: "ProdutosBuscar",
  data() {
    return {
      busca: ""
    };
  },
  methods: {
    buscarProduto() {
      this.$router.push({ query: { q: this.busca } });
    }
  }
};
</script>

<style scoped></style>
