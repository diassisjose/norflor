
<template>

  <div :class="'rounded-lg text-center card-norflor pt-4 pb-3 '+cardClass">
    <client-only>
    <div class="pb-5 pt-3">
      <div class="card-header"
      >
        <img :class="'card-img img-size-cert '+classIcon"
          data-aos="flip-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          :data-src="'/'+cardIcon" :alt="cardAlt"  v-lazy-load />
      </div>
      <div class="card-body text-center"
      >
        <h5 class="card-contact card-title">{{cardTitle}}</h5>
        <p class="card-contact line-heigh-2 px-4">{{cardContent}}</p>
      </div>
    </div>
    </client-only>
  </div>
</template>

<script>
export default {
  props: [
    'cardTitle',
    'cardContent',
    'cardIcon',
    'classIcon',
    'cardAlt',
    'linkBtn',
    'txtBtn',
    'cardClass'
  ],
}
</script>
