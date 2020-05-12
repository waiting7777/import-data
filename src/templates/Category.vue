<template>
  <Layout>
    <div class="container">
      <div>
        <h1 class="category-title">{{ $page.category.title }}</h1>
        <p class="category-subtitle">
          A collection of
          <span class="self-center">{{ $page.category.belongsTo.totalCount }} posts</span>
        </p>
      </div>
      <div class="seperator"></div>
      <div class="list-item">
        <PostListItem
          v-for="edge in $page.category.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
      <div class="pagination">
        <Pagination
          :baseUrl="$page.category.path"
          :currentPage="$page.category.belongsTo.pageInfo.currentPage"
          :totalPages="$page.category.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.category.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    category(id: $id) {
      title
      path
      belongsTo(perPage: 2, page: $page) @paginate {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Blog {
              title
              excerpt
              image(width:800)
              path
              timeToRead
              humanTime : created(format:"DD MMM YYYY")
              datetime : created
              category {
                id
                title
              }
              author {
                id
                name
                image(width:64, height:64, fit:inside)
                path
              }
            }
          }
        }
      }
    }  
  }
</page-query>

<script>
import PostListItem from "~/components/PostListItem.vue"
import Pagination from "~/components/Pagination.vue"

export default {
  components: {
    Pagination,
    PostListItem
  },
  metaInfo() {
    return {
      title: this.$page.category.title
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 3rem;
}
.category-title {
  font-size: 3rem;
  padding-bottom: 0;
  margin-bottom: 0;
}
.category-subtitle {
  font-size: 1.25rem;
  color: #4a5568;
}
</style>