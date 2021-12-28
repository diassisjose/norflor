<template>
  <nav class="navbar nav-shadow navbar-expand-lg navbar-dark bg-dark nav1 py-3">
    <span class="container">
      <nuxt-link class="navbar-brand" to="/">
        <img class="img-fluid" src="/logo-norflor-white-h.png" alt />
      </nuxt-link>
      <nuxt-link
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        to
      >
        <span class="icon-bar top-bar"></span>
        <span class="icon-bar middle-bar"></span>
        <span class="icon-bar bottom-bar"></span>
      </nuxt-link>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <nuxt-link class="nav-link" to="/institucional" id="dropdownInstitucional" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Institucional <i class="fa fa-angle-down" aria-hidden="true"></i></nuxt-link>
            <div class="dropdown-menu" aria-labelledby="dropdownInstitucional">
              <nuxt-link class="dropdown-item item-drop-nav" to="/institucional/#topInstitucional">Sobre a Norflor</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/institucional/#quemInstitucional">Quem somos</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/institucional/#propositoInstitucional">Propósito e Cultura</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/institucional/#governancaInstitucional">Governança Corporativa</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/institucional/#certificacoesInstitucional">Certificações</nuxt-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <nuxt-link class="nav-link" to="/sustentabilidade" id="dropdownSustentabilidade" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sustentabilidade <i class="fa fa-angle-down" aria-hidden="true"></i></nuxt-link>
            <div class="dropdown-menu" aria-labelledby="dropdownSustentabiidade">
              <nuxt-link class="dropdown-item item-drop-nav" to="/sustentabilidade/#topSustentabilidade">Manejo Sustentável</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/sustentabilidade/#fazendoSustentabilidade">Fazendo diferente</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/sustentabilidade/#ambienteSustentabilidade">Meio Ambiente</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/sustentabilidade/#socialSustentabilidade">Responsabilidade Social</nuxt-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <nuxt-link class="nav-link" to="/negocios" id="dropdownNegocios" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Negócios <i class="fa fa-angle-down" aria-hidden="true"></i></nuxt-link>
            <div class="dropdown-menu" aria-labelledby="dropdownNegocios">
              <nuxt-link class="dropdown-item item-drop-nav" to="/negocios/#topNegocios">Negócios</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/negocios/#florestasNegocios">Nossas florestas</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/negocios/#produtosNegocios">Produtos</nuxt-link>
            </div>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/novidades">Novidades</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/contato">Fale Conosco</nuxt-link>
          </li>
        </div>
        <div class="navbar-nav ">
          <li class="nav-item nav-link">
            |
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/eng/home">
              <img src="/eua-flag.png" width="30" alt="">
            </nuxt-link>
          </li>
          <li class="nav-item mleft">
            <nuxt-link class="nav-link pl-md-0" to="/">
              <img src="/brasil-flag.png" width="30" alt="">
            </nuxt-link>
          </li>
        </div>
      </div>
    </span>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.mleft {
  margin-left: 0;
}
.nav-shadow {
  -webkit-box-shadow: 0px 2px 70px rgba(50, 50, 50, 0.388);
  -moz-box-shadow: 0px 2px 70px rgba(50, 50, 50, 0.388);
  box-shadow: 0px 2px 70px rgba(50, 50, 50, 0.388);
}
.dropdown-item {
  padding: 9px 14px;
}

.dropdown-menu{
  padding: 5px 0 0 0;
  margin: 0;

}

.dropdown>.dropdown-menu {
  display: none;
  border: none;
  border-radius: 0;
  box-shadow: 0 15px 1em #3333334f;
}

.dropdown-item:hover {
  background-color: var(--v3);
  color: var(--b1);
}

.dropdown:hover>.dropdown-menu {
  display: block;
}

.item-drop-nav {
  font-size: 12px;
}
</style>
