<template>

  <div class=" card shadow rounded-lg card-1 mx-3 mt-3"
    data-aos="fade-in"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <a :href="cardHref">
      <img class="card-img-top img-rounded-top-border" :data-src="'/'+cardIcon" :alt="cardAlt" v-lazy-load>
    </a>
    <div class="card-body pt-4 px-4">
      <a :href="cardHref">
        <h5 class="card-title">{{cardTitle}}</h5>
        <p class="text-white-90 line-heigh-2 card-norflor">{{cardContent}}</p>
      </a>

    </div>
    <div class="card-footer">
      <a :href="cardHref">
        <div class="text-right ">
          <a :href="cardHref" class=" text-white letter-space hvr-icon-forward card-norflor">{{cardLink}}
            <i class="fa fa-long-arrow-right hvr-icon" aria-hidden="true"></i>
          </a>
        </div>
      </a>

    </div>
  </div>
</template>

<script>
export default {
    props: [
        'cardTitle',
        'cardContent',
        'cardLink',
        'cardHref',
        'cardIcon',
        'cardAlt'
    ]

}
</script>
