<template>
  <div class="card card-norflor card-3 pt-4 pb-3">
    <div class="card-body">
      <h5 class="card-title">{{cardTitle}}</h5>
      <p class="line-heigh-2">{{cardContent}}</p>
      <div class="text-center"></div>
    </div>
    <div class="card-w-footer text-center">
      <CTAL btnTxt="Alô, Norflor!" :class="' '+activeBtn1"/>
      <PRIB :btnTxt="txtPrib" :href="link" :class="'text-center '+activeBtn2" :option="option" />
    </div>
  </div>
</template>

<script>
import CTAL from "@/components/buttons/CTAL";
import PRIB from "@/components/buttons/PRIB";
import PRI from "@/components/buttons/PRI";

export default {
  props: [
    "cardTitle",
    "cardContent",
    "activeBtn1",
    "activeBtn2",
    "link",
    "option",
    "txtPrib"
    ],
  components: {
    CTAL,
    PRIB,
    PRI,
  }
};
</script>
