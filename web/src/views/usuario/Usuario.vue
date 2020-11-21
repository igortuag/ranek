<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{ name: 'Usuario' }">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UsuarioCompras' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UsuarioVendas' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UsuarioEditar' }"
            >Editar Usuario</router-link
          >
        </li>
        <li>
          <button @click.prevent="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "Usuario",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped></style>
