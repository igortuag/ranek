<template>
  <p>Produto {{ id }} {{ produto }}</p>
</template>

<script>
import { api } from "@/services";

export default {
  name: "Produto",
  data() {
    return {
      produto: null
    };
  },
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  methods: {
    getProduto() {
      api.get(`/produto/${this.id}`).then(response => {
        this.produto = response.data;
      });
    }
  },
  created() {
    this.getProduto();
  }
};
</script>

<style scoped></style>
