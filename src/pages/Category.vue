<template>
  <Layout>
    <div class="container">
      <h1>Category</h1>
      <div class="seperator"></div>
      <ul class="list">
        <li v-for="category in $page.allCategory.edges" :key="category.node.id">
          <g-link :to="category.node.path" class="hover-link">
            {{ category.node.title }}({{ category.node.belongsTo.totalCount }})
          </g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
  query {
    allCategory(order: DESC) {
      edges {
        node {
          id,
          title,
          path,
          belongsTo {
            totalCount
          }
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Category'
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 3rem;
  padding-bottom: 3rem;
  min-height: calc(100vh - 101px);
}
</style>