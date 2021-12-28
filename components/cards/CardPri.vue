<template>
  <div class="card-norflor card-3 pt-4 pb-3"
    data-aos="fade-in"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <div class="card-header">
      <img :data-src="'/'+cardIcon" :alt="cardAlt" width="50px" v-lazy-load/>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{cardTitle}}</h5>
      <p class="line-heigh-2">{{cardContent}}</p>
      <div class="text-center">
          <PRI
           btnTxt="Visitar"
           href="cas"
          />
      </div>
    </div>
  </div>
</template>

<script>
import PRI from "@/components/buttons/PRI";
export default {
  props: ["cardTitle", "cardContent", "cardIcon", "cardAlt"],
  components: {
      PRI
  }
};
</script>
