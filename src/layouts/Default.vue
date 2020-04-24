<template>
  <div id="app" dark>
    <NavbarPartial />
    <slot/>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import NavbarPartial from '~/layouts/partials/Navbar.vue'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: {
    NavbarPartial, Footer
  }
}
</script>

