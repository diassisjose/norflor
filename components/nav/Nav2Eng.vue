<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="container">
      <b-navbar-brand href="/eng/home"><img class="img-fluid" src="/logo-norflor-white-h.png" alt /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Institutional">
            <b-dropdown-item href="/eng/institucional/#topInstitucional">About Norflor </b-dropdown-item>
            <b-dropdown-item href="/eng/institucional/#quemInstitucional">Who we are</b-dropdown-item>
            <b-dropdown-item href="/eng/institucional/#propositoInstitucional">Purpose and Culture</b-dropdown-item>
            <b-dropdown-item href="/eng/institucional/#governancaInstitucional">Corporate Governance</b-dropdown-item>
            <b-dropdown-item href="/eng/institucional/#certificacoesInstitucional">Certifications</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Sustainability">
            <b-dropdown-item href="/eng/sustentabilidade/#topSustentabilidade">Sustainable Management</b-dropdown-item>
            <b-dropdown-item href="/eng/sustentabilidade/#fazendoSustentabilidade">Making a difference</b-dropdown-item>
            <b-dropdown-item href="/eng/sustentabilidade/#ambienteSustentabilidade">Environment</b-dropdown-item>
            <b-dropdown-item href="/eng/sustentabilidade/#socialSustentabilidade">Social Responsability</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Business">
            <b-dropdown-item href="/eng/negocios/#topNegocios">Business</b-dropdown-item>
            <b-dropdown-item href="/eng/negocios/#florestasNegocios">Our Forests</b-dropdown-item>
            <b-dropdown-item href="/eng/negocios/#produtosNegocios">Products</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="/eng/novidades">News</b-nav-item>
          <b-nav-item href="/eng/contato">Keep in touch</b-nav-item>
          <li class="nav-item nav-link">
            ___
          </li>
          <b-nav-item href="/">
            <img src="/brasil-flag.png" width="30" alt="">
          </b-nav-item>
          <b-nav-item href="/eng/home">
            <img src="/eua-flag.png" width="30" alt="">
          </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
