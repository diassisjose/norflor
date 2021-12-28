<template>
  <div class="row no-gutters bg-side"
    data-aos="fade-in"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <client-only>
    <div class="col-sm px-md-5 no-gutters">
      <div class="left-side pl-5">
        <h1 class="header1 font-weight-bold text-section-sup">{{titleHeader}}</h1>
        <p class="py-3 p-head">{{txtHeader}}</p>
        <CTA btnTxt="Alô, Norflor!"/>
        <PRI :class="'mr-2 '+classBtn1" :btnTxt="txtBtn1" :href="'/'+linkBtn1" />
        <SEC :class="'mr-2 '+classBtn2" :btnTxt="txtBtn2" :href="'/'+linkBtn2" />
      </div>
    </div>
    <div class="col-sm pt-5 px-3 pb-4 no-gutters">
      <div class="card shadow-lg p-5 rounded-lg m-sm-5">
        <Form />
      </div>
    </div>
    </client-only>
  </div>
</template>

<script>
import CTA from '@/components/buttons/CTA'
import Form from "@/components/forms/Form2Eng";
import PRI from "@/components/buttons/PRI";
import SEC from "@/components/buttons/SEC";
export default {
  components: {
    PRI,
    SEC,
    Form,
    CTA
  },
  props: [
    "imgHeader",
    "altImg",
    "titleHeader",
    "txtHeader",
    "txtBtn1",
    "linkBtn1",
    "classBtn1",
    "txtBtn2",
    "linkBtn2",
    "classBtn2"
  ]
};
</script>
