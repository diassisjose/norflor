<template>
  <div class="container-fluid px-5 py-5">
    <!-- <div class="row card-deck pb-5">
      <client-only>
        <div class="card card-2-due shadow rounded-lg mx-4 mt-3 mb-5"
          v-for="post in posts" :key="post.id"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <nuxt-link :to="{ name: 'novidades-slug', params: { slug: post.slug, id: post.id }}">
            <img class="card-img-top img-rounded-top-border" :src="post.acf.thumbnail.url" alt="cardAlt" >
          </nuxt-link>
          <div class="card-body mt-0 px-4">
            <div class="row">
              <div class="col text-left mt-0 mb-4">
                <small :class="'evento text-lin ' + post.acf.categoria">{{ post.acf.categoria }}</small>
              </div>
              <div class="col text-right ">
                <small class="text-muted text-lin">{{ post.acf.data_de_postagem }}</small>
              </div>
            </div>
            <h5 class="card-title">{{ post.titulo }}</h5>
            <div class="line-heigh-2 card-norflor" v-html="post.acf.resumo"></div>
          </div>
          <div class="card-footer">
            <nuxt-link :to="{ name: 'novidades-slug', params: { slug: post.slug, id: post.id }}">
              <div class="text-right ">
                <span class=" text-white letter-space hvr-icon-forward card-norflor">Ler mais
                  <i class="fa fa-long-arrow-right hvr-icon" aria-hidden="true"></i>
                </span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </client-only>
      <Card2
        cardIcon="logo-alo-norflor.jpg"
        cardAlt="ícone azul"
        cardTitle="Alô, Norflor!"
        cardContent="Se você identificar ameaças ao meio ambiente, discriminação, assédio ou atitudes que colocam em risco a saúde e a segurança, entre em contato conosco."
        cardLink="Vamos visitar"
        cardHref="https://contatoseguro.com.br/norflor"
      />
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import Card12 from "@/components/cards/CardCL12"
import Card2 from "@/components/cards/CardCL2"
export default {
  name: 'GroupCards',
  components: {
    Card12,
    Card2
  }
}
</script>

<style scoped>

.sem_destaque {
  display: none;
}

</style>
