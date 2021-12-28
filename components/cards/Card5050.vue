<template>
  <div class="row py-4">
    <client-only>
      <img
        class="img-responsive col-dueto col-md-6"
        :data-src="'/'+cardIcon"
        :alt="cardAlt"
        height="100%"
        width="100%"
        align="right"
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        v-lazy-load
      />
      <img
        class="img-responsive col-dueto col-md-6"
        :data-src="'/'+cardIcon1"
        :alt="cardAlt1"
        height="100%"
        width="100%"
        align="right"
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        v-lazy-load
      />
    </client-only>
  </div>
</template>
<script>
export default {
  props: [
    "cardIcon",
    "cardAlt",
    "cardIcon1",
    "cardAlt1"
  ]
};
</script>
