<template>
  <Layout>
    <div class="main">
      <PostListItem v-for="edge in $page.entries.edges" :key="edge.node.id" :record="edge.node" />
    </div>
  </Layout>
</template>

<page-query>

query($page:Int) {
  entries: allBlog(perPage: 10, page: $page) @paginate {
    totalCount,
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        excerpt
        image(width:800)
        path
        timeToRead
        humanTime: created(format:"DD MMM YYYY")
        dateTime: created
        category {
          id
          title
        }
        author {
          id
          name
          image(width: 64, height: 64, fit:inside)
          path
        }
      }
    }
  }
}

</page-query>

<script>
import PostListItem from '~/components/PostListItem.vue'
export default {
  metaInfo: {
    title: 'Import Data'
  },
  components: {
    PostListItem
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  padding: 4rem 0;
  margin-left: -1rem;
  margin-right: -1rem;
}
</style>

