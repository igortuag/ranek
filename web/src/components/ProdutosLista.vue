<template>
  <section class="produtos-container">
    <transition mode="out-in">
      <div
        v-if="produtos && produtos.length > 0"
        class="produtos"
        key="produtos"
      >
        <div class="produto" v-for="(produto, index) in produtos" :key="index">
          <router-link :to="{ name: 'Produto', params: { id: produto.id } }">
            <img
              v-if="produto.fotos"
              :src="produto.fotos[0].src"
              :alt="produto.fotos[0].titulo"
            />
            <p class="preco">{{ produto.preco }}</p>
            <h2 class="titulo">{{ produto.nome }}</h2>
            <p>{{ produto.descricao }}</p>
          </router-link>
        </div>
        <ProdutosPaginar
          :produtosTotal="produtosTotal"
          :produtosPorPagina="produtosPorPagina"
        />
      </div>

      <div key="sem-resultados" v-else-if="produtos && produtos.length === 0">
        <p class="sem-resultados">
          Busca sem resultados. Tente buscar outro termo
        </p>
      </div>
      <PaginaCarregando key="carregando" v-else />
    </transition>
  </section>
</template>

<script>
import ProdutosPaginar from "@/components/ProdutosPaginar";
import { api } from "@/services";
import { serialize } from "@/helpers";

export default {
  name: "ProdutosLista",
  data() {
    return {
      produtos: [],
      produtosPorPagina: 9,
      produtosTotal: 0
    };
  },
  components: {
    ProdutosPaginar
  },
  computed: {
    url() {
      return `/produto?_limit=${this.produtosPorPagina}${serialize(
        this.$route.query
      )}`;
    }
  },
  watch: {
    url() {
      this.getProdutos();
    }
  },
  methods: {
    getProdutos() {
      this.produtos = null;
      api.get(this.url).then(({ data, headers }) => {
        this.produtosTotal = +headers["x-total-count"];
        this.produtos = data;
      });
    }
  },
  created() {
    this.getProdutos();
  }
};
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 30px;
}

@media screen and (max-width: 500px) {
  .produtos {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 10px;
  }
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: #e80;
  font-weight: bold;
}

.sem-resultados {
  text-align: center;
}
</style>
