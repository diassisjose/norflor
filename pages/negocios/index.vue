<template>
  <div id="topNegocios" class="pt-5 ">
    <Header1
      imgHeader="bg-header-negocios.jpg"
      altImg="bg-norflor-eucalipto"
      titleHeader="Negócios"
      txtHeader="
      A Norflor atua como produtora de madeira e carvão, atendendo mercado nacional e internacional.
      O foco principal é trabalhar por demanda, atendendo principalmente aos setores de biomassa de
      carvão e biomassa de celulose."
      txtBtn1="Cargueira"
      linkBtn1="institucional"
      classBtn1="d-none"
      txtBtn2="Validação"
      linkBtn2="users"
      classBtn2="d-none"
    />
    <div id="florestasNegocios" class="pt-5 bg-side ">
      <Rel5050
        imgRel="mapa-norflor.jpg"
        titleRel="Nossas Florestas"
        txtRel="
        O projeto NORFLOR ocupa uma área de aproximadamente 34 mil hectares, sendo aproximadamente 17
        mil ocupados pelo plantio sustentável de clones de Eucalyptus spp. Para cada 1 hectare plantado,
        a Norflor protege e preserva 0,7 hectares, destinando 35% à preservação ambiental."
        txtBtn2="Informações"
        linkBtn="institucional"
        classBtn="d-none"
      />
    </div>
    <div id="produtosNegocios" class="container-fluid pt-3">
      <TCenter
        titleSec="Produtos"
        txtSec="
        A madeira e carvão são 100% certificados, atestando o compromisso da Norflor com o manejo responsável
         das florestas.
        "
      />
      <div class="container-fluid pb-4">
        <Card50
          cardTitle="Madeira"
          cardContent=""
          cardIcon="madeira.png"
          cardAlt="cardAlt"
          cardIcon1="carvao.png"
          cardAlt1="cardAlt"
        />
      </div>

    </div>
    <div class="container text-center py-5">
      <h4 class="fulloff">.</h4>
    </div>
  </div>
</template>
ara
<script>
import Header1 from "@/components/headers/Header1";
import Rel5050 from "@/components/releases/Release5050";
import Rel433 from "@/components/releases/Release403030";
import TCenter from "@/components/titles/TSecC50";
import Rel444 from "@/components/releases/Release404040";
import Card50 from "@/components/cards/Card5050";
import PRIB from "@/components/buttons/PRIB";
export default {
  components: {
    Header1,
    Rel5050,
    Rel433,
    TCenter,
    Rel444,
    Card50,
    PRIB
  }
};
</script>

<style lang="scss" scoped>
.fulloff {
  color: #fff;
}
</style>
