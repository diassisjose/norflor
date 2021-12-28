<template>
  <div class="rounded-lg text-center card-norflor card-3 pt-4 pb-3"
    data-aos="fade-in"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <div class="card-header">
      <img :data-src="'/'+cardIcon" :alt="cardAlt" width="150px" v-lazy-load/>
    </div>
    <div class="card-body text-center">
      <h5 class="card-title">{{cardTitle}}</h5>
      <p class="line-heigh-2">{{cardContent}}</p>
    </div>
    <div class="row">
      <span class="container text-center d-none">
        <p class="my-1"><i class="fa fa-tree" aria-hidden="true"></i>{{'  '+item1}}</p>
        <p class="my-1"><i class="fa fa-tree" aria-hidden="true"></i>{{'  '+item2}}</p>
        <p class="my-1"><i class="fa fa-tree" aria-hidden="true"></i>{{'  '+item3}}</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "cardTitle",
    "cardContent",
    "cardIcon",
    "cardAlt",
    "txtBtn",
    "item1",
    "item2",
    "item3"
  ]
};
</script>
