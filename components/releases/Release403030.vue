<template>
  <div class="container-fluid">
    <div class="container pt-1 pb-5 px-4">
      <div class="row">
        <div class="pt-md-5 pb-md-3 col-md-4"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h2 class="font-weight-bold">{{titleSec}}</h2>
        </div>
        <div class="pb-5 px-4">
          <div class="row">
            <div class="txt-3col"
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <p class="">{{txtSec}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ["titleSec", "txtSec"]
};
</script>
