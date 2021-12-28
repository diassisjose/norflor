<template>
  <div class="pt-5 center no-gutters pr-0">
    <client-only>
    <img class="header-img" center :data-src="post.acf.bannerheader.url" fluid :alt="post.acf.bannerheader.alt" v-lazy-load>
    <div class="pt-5 mx-md-4 row">
      <div class="container cont px-md-5">
        <b-col class="novidades container px-md-5 px-sm-0">
          <h1 class="text-center px-md-5"><strong>{{ post.titulo }}</strong></h1>
          <div class="row">
            <hr><p><small>Categoria: {{ post.acf.categ.label }} | Data: {{ post.acf.data_de_postagem }}</small></p><hr>
          </div>
          <b-col fluid class="a pt-3 pb-5" v-html="post.conteudo"></b-col>
          <b-col class="pb-5 text-right">
            <!-- <h6><strong>Compartilhe:</strong></h6> -->
          </b-col>
        </b-col>
      </div>
    </div>
    </client-only>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        post: {}
      }
    },
    async asyncData({params, payload}) {
      if(payload) {
        return {
          post: payload
        }
      } else {
        return axios.get("https://norflor.com.br/news/index.php/wp-json/news-norflor/v1/novidade/"+ params.slug)
        .then((res) => {
          return {
            post: res.data
          }
        })
      }
    },

  }
</script>

<style scoped>
.cont {
  width: 80%;
}
@media (max-width: 450px) {
  .cont {
    width: 100%;
  }
  h1 {
    font-size: 30px !important;
  }
}

.header-img {
  width: 100%;
  height: auto;
}
.novidades {
  align-items: center;
}
.a {
  line-height: 1.8em;
  color: rgb(109, 107, 107);
}

.a >>> h3, h2, h4, h5 {
  padding-bottom: 12px;
  padding-top: 20px;
}
hr {
  color: #00000000;
  margin-top: 1.2em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  border-color: rgba(188, 212, 178, 0.521) !important;
}
small {
  text-transform: uppercase;
}
.a >>> li {
  margin-left: 40px;
}
.a >>> ul {
  margin-top: 12px;
}
.a >>> a {
  color: rgb(63, 168, 95);
  font-weight: 600;
}
.a >>> .aligncenter {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: auto;
}
.a >>> img {
  margin-top: 20px;
  margin-bottom: 20px;
}

h1 {
  font-size: 40px;
  line-height: 48px;
}
</style>
