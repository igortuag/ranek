<template>
  <p>Produto {{ id }}</p>
</template>

<script>
export default {
  name: "Produto",
  props: {
    id: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped></style>
