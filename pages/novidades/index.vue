<template>
  <div class="bg-side">
    <div class="no-gutters bg-side pb-1">
      <div class="px-md-5 no-gutters">
        <div class="pt-5 mt-5">
          <h1 class="text-center header1 font-weight-bold text-section-sup"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
          >Novidades</h1>
          <p class="text-center py-3 p-head"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
          >Acompanhe nossos conteúdos e conheça nossos projetos, eventos e atualizações.</p>
        </div>
        <div class="text-center d-none d-sm-block d-xs-block">
          <div class="btn-group btn-group-sm text-center" role="group" aria-label="Basic example">
            <client-only>
              <b-button
                type="button"
                class="btn-category btn btn-secondary"
                @click="category = option.value"
                v-for="option in options"
                :key="option.id">
                  {{ option.text }}
              </b-button>
              <b-button type="button" class="btn-category btn btn-active" @click="category = ''">TODAS</b-button>
            </client-only>
          </div>
        </div>
      </div>
    </div>
    <div class="container text-center d-block d-sm-none">
      <client-only>
        <b-button type="button" class="btn-category m-1 btn btn-secondary" @click="category = post.acf.categ.value" v-for="post in posts" :key="post.id">{{ post.acf.categ.label }}</b-button>
        <b-button type="button" block class="btn-category m-1 btn btn-active " @click="category = ''">TODAS</b-button>
      </client-only>
    </div>
    <div class="container">
      <div class="py-5">
        <div class="row pb-5">
          <client-only v-for="post in posts" :key="post.id">
            <div class="card col shadow rounded-lg mx-2 mt-3 mb-5"
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              v-if="post.acf.categ.value == category || !category"
            >
              <nuxt-link :to="{ name: 'novidades-slug', params: { slug: post.slug, id: post.id }}">
                <img class="card-img-top img-rounded-top-border" :src="post.acf.thumbnail.url" alt="cardAlt" v-lazy-load>
              </nuxt-link>
              <div class="card-body mt-0 px-4">
                <div class="text-left mt-0 mb-4">
                  <small :class="'evento text-lin ' + post.acf.categ.value">{{ post.acf.categ.label }}</small>
                </div>
                <h5 class="card-title">{{ post.titulo }}</h5>
                <div class="line-heigh-2 card-norflor" v-html="post.acf.resumo"></div>
              </div>
              <div class="card-footer">
                <nuxt-link :to="{ name: 'novidades-slug', params: { slug: post.slug, id: post.id }}">
                  <div class="row">
                    <div class="col ml-3 pl-4">
                      <small class="text-muted text-center text-lin">{{ post.acf.data_de_postagem }}</small>
                    </div>
                    <div class="col ml-5 mr-2 text-right card-footer-btn">
                      <span class=" text-white letter-space hvr-icon-forward card-norflor">Ler mais
                      </span>
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import PRIpost from "@/components/buttons/PriPost"
import Card12 from "@/components/cards/CardCL12"
import DMobi from "@/components/buttons/DropMobi"
import Header1 from "@/components/headers/Header1"
export default {
  name: 'NewsBlog',
  head() {
    return {
      title: 'Novidades - Norflor',
      meta: [
        { hid: 'description', name: 'description', content: 'Acompanhe nossos conteúdos e conheça nossos projetos, eventos e atualizações.' },
        { hid: 'ogtitle', name: 'ogtitle', content: 'Novidades Norflor'}
      ]
    }
  },
  data () {
    return {
      selected: '',
      options: [
        { id: 2, value: 'saude', text: 'SAÚDE' },
        { id: 3, value: 'meio_ambiente', text: 'MEIO AMBIENTE'},
        { id: 4, value: 'resp_social', text: 'RESPONSABILIDADE SOCIAL'},
        { id: 5, value: 'endomkt', text: 'ENDOMARKETING'},
        { id: 6, value: 'seguranca', text: 'SEGURANÇA'}
      ],
      category: '' && selected
    }
  },
  components: {
    Header1,
    Card12,
    PRIpost,
    DMobi
  },
  fetch({ store }) {
    return axios.get('https://norflor.com.br/news/index.php/wp-json/news-norflor/v1/novidades')
    .then((res) => {
      store.commit('frontPagePosts', res.data)
    }).catch((error) => {
      console.log(error)
    })
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>

<style scoped>

.text-lin {
  font-size: 10px !important;
  text-transform: uppercase;
}

.text.blk {
  color: var(--v2) !important;
}
.left-side {
  padding-top: 7%;
}

.btn-active{
  color: #fff !important;
  background: var(--v3) !important;
}

.btn-category {
  border-radius: 40px;
  padding: 8px 15px;
  font-size: 8pt;
  text-transform: uppercase;
  border: 1px solid var(--v3);
  color: var(--v1);
  background: #63636300;
}

.btn-category:hover {
  padding: 8px 15px;
  color: #fff;
  background: var(--v3);
}

.card {
  padding-left: 0;
  padding-right: 0;
  min-width: 250px !important;
  max-width: 24.3%;
}

@media (max-width: 450px)
{
  .card {
    min-width: 95% !important;
    max-width: 24.3%;
  }
}

.dropdown.menu, .dropdown.item {
  display: block !important;
}


</style>
