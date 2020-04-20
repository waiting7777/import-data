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
  max-width: 1056px !important;
}
</style>
