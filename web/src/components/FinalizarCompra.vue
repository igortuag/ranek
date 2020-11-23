<template>
  <section>
    <h2>Endereço de Envio</h2>
    <UsuarioForm>
      <button class="btn" @click.prevent="finalizarCompra">
        Finalizar Compra
      </button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";

export default {
  name: "FinalizarCompra",
  components: {
    UsuarioForm
  }
};
</script>

<style lang="scss" scoped></style>
