<template>
  <div class="col-md-3 p-3 rounded-lg card-norflor card-3 pt-4 pb-3"
    data-aos="fade-in"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <img class="card-img-top" :src="'/'+cardIcon" :alt="cardAlt" width="50px" />
    <div class="card-body">
      <h5 class="card-title">{{cardTitle}}</h5>
      <p class="line-heigh-2">{{cardContent}}</p>
      <div class="text-center">
        <PRIB :btnTxt="txtBtn" :href="linkBtn" />
      </div>
    </div>
  </div>
</template>

<script>
import PRIB from "@/components/buttons/PRIB";
export default {
  props: [
    "cardTitle",
    "cardContent",
    "cardLink",
    "cardHref",
    "cardIcon",
    "cardAlt",
    "linkBtn",
    "txtBtn"
  ],
  components: {
    PRIB
  }
};
</script>
