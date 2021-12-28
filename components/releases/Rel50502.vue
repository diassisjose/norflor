<template>
  <div class="container">
    <div :class="'row '+ classe">
      <div :class="'col-md-6 no-gutters '+position1">
        <div class="justify-content-left"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          >
          <img
            class="img-responsive text-center "
            :src="'/'+imgRel"
            alt="image"
            height="100%"
            width="100%"
            align="right"
          />
        </div>
      </div>
      <div :class="'col-md-6 px-5 no-gutters '+position2 ">
        <div class="left-side pl-md-3"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h3 class="pt-md-2 font-weight-bold text-section-sup">{{titleRel}}</h3>
          <p class="pt-3 pb-5 p-card">{{txtRel}}</p>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import SEC from "@/components/buttons/SEC";
export default {
  props: [
    "imgRel",
    "titleRel",
    "txtRel",
    "classe",
    "position1",
    "position2"
  ]
};
</script>
