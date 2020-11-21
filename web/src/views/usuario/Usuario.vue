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
          <router-link to="/">Deslogar</router-link>
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
  name: "Usuario"
};
</script>

<style scoped></style>
