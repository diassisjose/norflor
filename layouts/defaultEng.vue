<template>
  <div>
    <Nav1 class="fixed-top hide1"/>
    <Nav2 class="fixed-top hide2"/>
    <nuxt class="pt-5 mt-4"/>
    <Footer />
    <IdFooter />
  </div>
</template>

<script>
import Nav1 from '@/components/nav/Nav1Eng'
import Nav2 from '@/components/nav/Nav2Eng'
import Footer from '@/components/footer/FooterEng'
import IdFooter from '@/components/footer/IdFooter'
export default {
  components: {
    Nav1, Nav2, Footer, IdFooter
  }
}
</script>
<style lang="scss">
@media only screen and (max-width: 991px) {
  .hide1 {
    display: none;
  }
}
@media only screen and (min-width: 992px) {
  .hide2 {
    display: none;
  }
}
</style>
