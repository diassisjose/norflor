<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="container">
      <b-navbar-brand href="/"><img class="img-fluid" src="/logo-norflor-white-h.png" alt /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Institucional">
            <b-dropdown-item href="/institucional/#topInstitucional">Sobre a Norflor </b-dropdown-item>
            <b-dropdown-item href="/institucional/#quemInstitucional">Quem Somos</b-dropdown-item>
            <b-dropdown-item href="/institucional/#propositoInstitucional">Propósito e Cultura</b-dropdown-item>
            <b-dropdown-item href="/institucional/#governancaInstitucional">Governança Corporativa</b-dropdown-item>
            <b-dropdown-item href="/institucional/#certificacoesInstitucional">Certificações</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Sustentabilidade">
            <b-dropdown-item href="/sustentabilidade/#topSustentabilidade">Manejo Sustentável</b-dropdown-item>
            <b-dropdown-item href="/sustentabilidade/#fazendoSustentabilidade">Fazendo Diferente</b-dropdown-item>
            <b-dropdown-item href="/sustentabilidade/#ambienteSustentabilidade">Meio Ambiente</b-dropdown-item>
            <b-dropdown-item href="/sustentabilidade/#socialSustentabilidade">Responsabilidade Social</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Negócios">
            <b-dropdown-item href="/negocios/#topNegocios">Negócios</b-dropdown-item>
            <b-dropdown-item href="/negocios/#florestasNegocios">Nossas Florestas</b-dropdown-item>
            <b-dropdown-item href="/negocios/#produtosNegocios">Produtos</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="/novidades">Novidades</b-nav-item>
          <b-nav-item href="/contato">Fale Conosco</b-nav-item>
          <li class="nav-item nav-link">
            ___
          </li>

          <b-nav-item href="/eng/home">
            <img src="/eua-flag.png" width="30" alt="">
          </b-nav-item>
          <b-nav-item href="/">
            <img src="/brasil-flag.png" width="30" alt="">
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
