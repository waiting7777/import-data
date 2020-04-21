<template>
  <div class="layout">
    <Header />
    <div class="container">
      <slot/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss">
.container {
  padding-top: 6rem;
  padding-left: 0 !important;
  padding-right: 0 !important;
  max-width: 1024px !important;
}
</style>
