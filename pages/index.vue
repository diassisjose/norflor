<template>
  <div>
    <Header1
      imgHeader="bg-header-home.jpg"
      titleHeader="Plantando, colhendo e transformando"
      txtHeader="Compromisso de valor compartilhado em negócios de base florestal."
      txtBtn1="Saiba mais"
      linkBtn1="/negocios"
      option=""
      classBtn1=""
      txtBtn2="Validação"
      linkBtn2="users"
      classBtn2="d-none"
    />
    <Rel5050
      imgRel="release-home.jpg"
      titleRel="Conheça a Norflor"
      txtRel="A Norflor Empreendimentos Agrícolas S.A. tem sede administrativa em Montes Claros e florestas de eucalipto no Norte de Minas Gerais, entre os municípios de Grão Mogol, Padre Carvalho e Josenópolis."
      txtBtn2="Quem somos"
      linkBtn="/institucional"
      classBtn=""
      />
    <div class="bg-side">
      <TCenter
      titleSec="Destaques"
      txtSec="A Norflor é reconhecida por sua experiência, qualidade e inovação. Acompanhe as notícias mais importantes:"
      />

      <div class="container-fluid px-5 py-5">
        <div class="row card-deck flex pb-5">
          <client-only v-for="post in posts" :key="post.slug">
            <div class="card card-2-due shadow rounded-lg mt-3 mb-5"
              v-if="post.acf.destaque_home !== 'none'"
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
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
          <div class="card card-2-due shadow rounded-lg mt-3 mb-5"
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <a href="https://contatoseguro.com.br/norflor">
              <img class="card-img-top img-rounded-top-border" data-src="logo-alo-norflor.jpg" alt="ícone azul" v-lazy-load>
            </a>
            <div class="card-body pt-4 px-4">
              <a href="https://contatoseguro.com.br/norflor">
                <h5 class="card-title">Alô, Norflor!</h5>
                <p class="line-heigh-2 card-norflor">
                  Se você identificar ameaças ao meio ambiente, discriminação, assédio ou atitudes que colocam em risco a saúde e a segurança, entre em contato conosco
                </p>
              </a>
            </div>
            <div class="card-footer">
              <a target="_blank" href="https://contatoseguro.com.br/norflor">
                <div class="row">
                  <div class="col ml-3 pl-4">
                    <small class="text-muted text-center text-lin"></small>
                  </div>
                  <div class="col ml-5 mr-2 text-right card-footer-btn-l">
                    <span class=" text-white letter-space hvr-icon-forward card-norflor cs2">VISITAR
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header1 from '@/components/headers/Header1'
import Rel5050 from '@/components/releases/Release5050'
import TCenter from '@/components/titles/TSecC50'
import Card2 from "@/components/cards/CardCL2"
export default {
  components: {
    Header1,
    Rel5050,
    TCenter,
    Card2
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

.card {
  min-width: 250px !important;
  max-width: 24.3%;
}

@media (max-width: 450px)
{
  .card {
    min-width: 100% !important;
    max-width: 24.3%;
  }
}

</style>

