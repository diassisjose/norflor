<template>
  <div>
    <HeaderContact
      imgHeader="bg-header-home.jpg"
      altImg="bg-norflor-eucalipto"
      titleHeader="Fale Conosco"
      txtHeader="Nosso canal de comunicação está aberto para você tirar dúvidas, fazer sugestões, reclamações, elogios,
       solicitação de visitas à Norflor ou denúncias. Preencha o formulário ao lado que entraremos em contato em breve!
       Se preferir não se identificar, clique e faça o contato anonimamente através do Alô Norflor! "
      txtBtn1="Cargueira"
      linkBtn1="institucional"
      txtBtn2="Validação"
      linkBtn2="users"
      classBtn1="d-none"
      classBtn2="d-none"
    />
    <client-only>
      <div class="container-fluid">
        <div class="row">
          <div class="rounded-lg card-norflor container text-center pt-4 pb-3 card-contact1 col-md-6 py-5">
            <div class="pb-4 pt-3 px-5">
              <div class="row card-deck">
                <div class="card-header col-sm-3">
                  <img
                    class="card-img float-center img-size-cont "
                    data-aos="flip-up"
                    src="/fazenda.png"
                    alt=""
                    width="40px"
                  />
                </div>
                <div class="card-body col-sm-9">
                  <h5 class="card-contact text-left px-4 card-title">Fazenda</h5>
                  <p class="card-contact text-left line-heigh-2 px-4">
                    Rod. BR 251, KM 376 – Ribeirão das Piabinhas
                    <br />Zona Rural – Josenólpolis/MG
                    <br />CEP: 39.575-000
                    <br />Telefone: 38 2101-3000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-lg card-norflor container text-center pt-4 pb-3 card-contact2 col-md-6 py-5">
            <div class="pb-4 pt-3 px-5">
              <div class="row card-deck">
                <div class="card-header col-sm-3">
                  <img
                    class="card-img float-center img-size-cont "
                    data-aos="flip-up"
                    src="/escritorio.png"
                    alt=""
                    width="40px"
                  />
                </div>
                <div class="card-body col-sm-9">
                  <h5 class="card-contact text-left px-4 card-title">Escritório</h5>
                  <p class="card-contact text-left line-heigh-2 px-4">
                    Av. Dr. José Corrêa Machado, 1380 – 1º andar
                    <br />Bairro Jardim São Luiz - Montes Claros/MG
                    <br />Cep: 39401-856
                    <br />Telefone: 38 2101-3000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import HeaderContact from "@/components/headers/HeaderContact";
import TCenter from "@/components/titles/TSecC50";
export default {
  components: {
    HeaderContact,
    TCenter
  }
};
</script>
