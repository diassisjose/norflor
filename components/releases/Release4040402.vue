<template>
  <div class="pb-5">
    <div class="row no-gutters">
      <div class="col-md-4 no-gutters">
        <div class="justify-content-right pt-5"
          data-aos="slide-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img class="border-img-rel img-responsive img-header-shadow" :src="'/'+imgRel">
        </div>
      </div>
      <span class="col-md-7 px-5"
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="60"
        data-aos-duration="1000"
      >
        <h2 class="font-weight-bold pb-4 pt-5">{{titleSec}}</h2>
        <div class="pb-5">
          <div class="row">
            <div class="txt-2col">
              <p class="px-3">{{txtSec}}</p>
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import SEC from "@/components/buttons/SEC";
export default {
  components: {
    SEC
  },
  props: ["imgRel", "titleSec", "txtSec", "txtBtn2", "linkBtn", "classBtn"]
};
</script>
