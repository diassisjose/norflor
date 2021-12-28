<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <TLeft :titleSec="titleSec" :txtSec="txtSec" />
        <CardW1
          :cardTitle="cardTitle"
          :cardContent="cardContent"
          :cardLink="cardLink"
          :cardHref="cardHref"
          :cardIcon="cardIcon"
          :cardAlt="cardAlt"
          :linkBtn="linkBtn"
          :txtBtn="txtBtn"

          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        />
        <CardW2
          :cardTitle="cardTitle2"
          :cardContent="cardContent2"
          :cardLink="cardLink2"
          :cardHref="cardHref2"
          :cardIcon="cardIcon2"
          :cardAlt="cardAlt2"
          :linkBtn="linkBtn2"
          :txtBtn="txtBtn2"

          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TLeft from "@/components/titles/TSecLeft40";
import CardW1 from "@/components/cards/CardW1";
import CardW2 from "@/components/cards/CardW2";
export default {
  components: {
    TLeft,
    CardW1,
    CardW2
  },
  props: [
    "titleSec",
    "txtSec",
    "cardTitle",
    "cardContent",
    "cardLink",
    "cardHref",
    "cardIcon",
    "cardAlt",
    "linkBtn",
    "txtBtn",
    "cardTitle2",
    "cardContent2",
    "cardLink2",
    "cardHref2",
    "cardIcon2",
    "cardAlt2",
    "linkBtn2",
    "txtBtn2"
  ]
};
</script>
