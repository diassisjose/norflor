<template>
  <div class="rounded-lg text-center card-norflor card-3 pt-4 pb-3">
    <div class="card-header"
    >
      <img class="card-img img-size-cert"
        data-aos="flip-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        :data-src="'/'+cardIcon" :alt="cardAlt"  v-lazy-load/>
    </div>
    <div class="card-body text-center"
    >
      <h5 class="card-title">{{cardTitle}}</h5>
      <p class="line-heigh-2 px-2">{{cardContent}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'cardTitle',
    'cardContent',
    'cardIcon',
    'cardAlt',
    'linkBtn',
    'txtBtn',
  ],
}
</script>
