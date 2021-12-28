<template>
  <div class="py-5">
    <div class="row no-gutters pb-5">
      <div class="col-md-6 px-md-5 no-gutters">
        <div class="left-side pl-5">
          <h2 class="pt-md-5 font-weight-bold text-section-sup"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          >{{titleRel}}</h2>
          <p class="py-3"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          >{{txtRel}}</p>
          <PLAY :class="'mr-2 '+classBtn" :btnTxt="txtBtn" :href="linkBtn" :option="option"/>
          <SEC :class="'mr-2 '+classBtn1" :icon="iconBtn1" :btnTxt="txtBtn1" :href="'/'+linkBtn1" />
        </div>
      </div>
      <div class="col-md-6 no-gutters">
        <div class="justify-content-right pt-5"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img
            class="border-img-left img-responsive img-header-shadow"
            :src="'/'+imgRel"
            alt
            height="100%"
            width="100%"
            align="right"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PLAY from "@/components/buttons/PLAY";
import SEC from "@/components/buttons/SEC";
export default {
  components: {
    PLAY,
    SEC
  },
  props: [
    "imgRel",
    "titleRel",
    "txtRel",
    "txtBtn",
    "linkBtn",
    "classBtn",
    "txtBtn1",
    "linkBtn1",
    "classBtn1",
    "iconBtn1",
    "option"

  ]
};
</script>
