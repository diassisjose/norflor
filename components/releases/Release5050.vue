<template>
  <div class="bg-side">
    <div class="row no-gutters bg-side">
      <div class="col-md-6 no-gutters">
        <div class="justify-content-right pt-5"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          >
          <img
            class="border-img-rel img-responsive img-header-shadow"
            :data-src="'/'+imgRel"
            alt
            height="100%"
            width="100%"
            align="right"
            v-lazy-load
          />
        </div>
      </div>
      <div class="col-md-6 px-md-5 no-gutters">
        <div class="left-side pl-5"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h2 class="pt-md-5 font-weight-bold text-section-sup">{{titleRel}}</h2>
          <p class="py-3">{{txtRel}}</p>
          <SEC :class="'mr-2 '+classBtn" :btnTxt="txtBtn2" :href="linkBtn" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row no-gutters"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div :class="texto1 + ' col-md-6 px-5 no-gutters'">
          <h3 class="header1 pt-md-5 font-weight-bold text-section-sup">{{titleCol1}}</h3>
          <p class="py-3'">{{txtCol1}}</p>
          <img class="img-fluid" :src="imgSec1" alt="">
        </div>
        <div :class="texto2 + ' col-md-6 px-5 no-gutters'">
          <h3 class="header1 pt-md-5 font-weight-bold text-section-sup">{{titleCol2}}</h3>
          <p class="py-3'">{{txtCol2}}</p>
          <img class="img-fluid " :src="imgSec2" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SEC from "@/components/buttons/SEC";
export default {
  components: {
    SEC
  },
  props: [
    "imgRel",
    "titleRel",
    "txtRel",
    "txtBtn2",
    "linkBtn",
    "classBtn",
    "titleCol1",
    "txtCol1",
    "titleCol2",
    "txtCol2",
    "imgSec1",
    "imgSec2",
    "texto1",
    "texto2"

  ]
};
</script>
