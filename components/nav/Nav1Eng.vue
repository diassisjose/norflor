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
            <nuxt-link class="nav-link" to="/eng/institucional" id="dropdownInstitucional" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Institutional <i class="fa fa-angle-down" aria-hidden="true"></i></nuxt-link>
            <div class="dropdown-menu" aria-labelledby="dropdownInstitucional">
              <nuxt-link class="dropdown-item item-drop-nav" to="/eng/institucional/#topInstitucional">About Norflor</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/eng/institucional/#quemInstitucional">Who we are</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/eng/institucional/#propositoInstitucional">Purpose and Culture</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/eng/institucional/#governancaInstitucional">Corporate Governance</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/eng/institucional/#certificacoesInstitucional">Certifications</nuxt-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <nuxt-link class="nav-link" to="/eng/sustentabilidade" id="dropdownSustentabilidade" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sustainability <i class="fa fa-angle-down" aria-hidden="true"></i></nuxt-link>
            <div class="dropdown-menu" aria-labelledby="dropdownSustentabiidade">
              <nuxt-link class="dropdown-item item-drop-nav" to="/eng/sustentabilidade/#topSustentabilidade">Sustainable Management</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/eng/sustentabilidade/#fazendoSustentabilidade">Making a difference</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/eng/sustentabilidade/#ambienteSustentabilidade">Environment</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/eng/sustentabilidade/#socialSustentabilidade">Social Responsability</nuxt-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <nuxt-link class="nav-link" to="/eng/negocios" id="dropdownNegocios" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Business <i class="fa fa-angle-down" aria-hidden="true"></i></nuxt-link>
            <div class="dropdown-menu" aria-labelledby="dropdownNegocios">
              <nuxt-link class="dropdown-item item-drop-nav" to="/eng/negocios/#topNegocios">Business</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/eng/negocios/#florestasNegocios">Our Forests</nuxt-link>
              <nuxt-link class="dropdown-item item-drop-nav" to="/eng/negocios/#produtosNegocios">Products</nuxt-link>
            </div>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/eng/novidades">News </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/eng/contato">Keep in touch </nuxt-link>
          </li>
        </div>
        <div class="navbar-nav ">
          <li class="nav-item nav-link">
            |
          </li>
          <li class="nav-item mleft">
            <nuxt-link class="nav-link " to="/">
              <img src="/brasil-flag.png" width="30" alt="">
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link pl-md-0" to="/eng/home">
              <img src="/eua-flag.png" width="30" alt="">
            </nuxt-link>
          </li>
        </div>
      </div>
    </span>
  </nav>
</template>

<script>
export default {

};
</script>

<style scoped>
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
