<template>
  <Layout>
    <div class="container">
      <h1>Tags</h1>
      <div class="seperator"></div>
      <ul class="list">
        <li v-for="tag in $page.allTag.edges" :key="tag.node.id">
          <g-link :to="tag.node.path" class="hover-link">
            {{ tag.node.title }}({{ tag.node.belongsTo.totalCount }})
          </g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
  query {
    allTag(order: ASC) {
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
    title: 'Tags'
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 3rem;
  min-height: calc(100vh - 101px);
}
</style>