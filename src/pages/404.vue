<template>
  <Layout>
    <div class="d-flex">
      <g-image src="~/assets/images/404.svg"></g-image>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
img {
  width: 80%;
  margin: auto;

  @media (max-width: 500px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
}
</style>