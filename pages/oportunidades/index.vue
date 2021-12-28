<template>
  <div>
    <Header1
      imgHeader="bg-header-home.jpg"
      altImg="bg-norflor-eucalipto"
      titleHeader="Oportunidades"
      txtHeader="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
      txtBtn1="Cargueira"
      linkBtn1="institucional"
      txtBtn2="Validação"
      linkBtn2="users"
    />
    <div class="pb-5">
      <TCenter
        titleSec="Selecione sua opção"
        txtSec="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
      />
      <div class="container py-5">
        <b-row>
          <CardPri 
          class="col-md-4"
          cardTitle="Test Title"
          cardContent="É um fato conhecido de todos que um leitor. É um fato conhecido de todos que um leitor É um fato conhecido de todos que um leitor"
          cardIcon="icon"
          cardAlt=""
          />
          <CardPri 
          class="col-md-4"
          cardTitle="Test Title"
          cardContent="É um fato conhecido de todos que um leitor. É um fato conhecido de todos que um leitor É um fato conhecido de todos que um leitor"
          cardIcon="icon"
          cardAlt=""
          />
          <CardPri 
          class="col-md-4"
          cardTitle="Test Title"
          cardContent="É um fato conhecido de todos que um leitor. É um fato conhecido de todos que um leitor É um fato conhecido de todos que um leitor"
          cardIcon= "icon"
          cardAlt=""
          />
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import Header1 from "@/components/headers/Header1";
import Rel5050 from "@/components/releases/Release5050";
import Rel433 from "@/components/releases/Release403030";
import TCenter from "@/components/titles/TSecC50";
import Rel444 from "@/components/releases/Release404040";
import CardW2 from "@/components/cards/CardW2";
import CardPri from "@/components/cards/CardPri";
import PRI from "@/components/buttons/PRI";
export default {
  components: {
    Header1,
    Rel5050,
    Rel433,
    TCenter,
    Rel444,
    CardW2,
    PRI,
    CardPri
  }
};
</script>
