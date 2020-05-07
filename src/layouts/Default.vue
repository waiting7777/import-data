<template>
  <div id="app" dark>
    <NavbarPartial />
    <slot/>
    <FooterPartial />
  </div>
</template>

<script>
import NavbarPartial from '~/layouts/partials/Navbar.vue'
import FooterPartial from '~/layouts/partials/Footer.vue'
export default {
  components: {
    NavbarPartial, FooterPartial
  }
}
</script>

