<template>
  <section>
    <div v-if="compras">
      <h2>Compras</h2>
      <div
        class="produtos-wrapper"
        v-for="(compras, index) in items"
        :key="index"
      >
        <ProdutoItem v-if="compra.produto" :produto="compra.produto">
          <p class="vendedor"><span>Vendedor</span>{{ compra.vendedor_id }}</p>
        </ProdutoItem>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from "@/components/ProdutoItem.vue";

export default {
  name: "UsuarioCompras",
  components: {
    ProdutoItem
  },
  data() {
    return {
      compras: null
    };
  }
};
</script>

<style scoped></style>
