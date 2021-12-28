<template>
  <b-container fluid>
    <b-row>
      <b-container class="py-5">
        <b-img src="/page404.svg" fluid center width="600" alt="Responsive image"></b-img>
        <h2 class="pt-5 text-center">Que pena...</h2>
        <p class="text-center">Infelizmente a página que você buscou não existe!<br> Mas sempre vale a pena voltar para onde tudo começou:<a class="orange" href="/"> Voltar para a Home</a></p>
      </b-container>
    </b-row>
  </b-container>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.orange {
  color: var(--l1);
  font-weight: 900;
  text-transform: uppercase;
}
</style>
