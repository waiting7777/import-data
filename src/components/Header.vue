<template>
  <header class="header">
    <b-navbar class="p-0" toggleable="md" type="dark">
      <b-navbar-brand>
        <g-link to="/">
          <g-image src="~/assets/images/logo.svg" class="logo-image"></g-image>
        </g-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <g-link class="nav--link" to="/about">About</g-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  padding-top: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #000;
  color: #fff;
}

.logo-image {
  margin-top: 5px;
}

.nav--link {
  margin-left: 20px;
  &:hover {
    text-decoration: none;
  }
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}
</style>