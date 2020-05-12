<template>
  <Layout>
    <div class="container">
      <div>
        <h1 class="tag-title">{{ $page.tag.title }}</h1>
        <p class="tag-subtitle">
          A collection of
          <span
            class="self-center"
          >{{ $page.tag.belongsTo.totalCount }} posts</span>
        </p>
      </div>
      <div class="separator"></div>
      <div class="list-item">
        <PostListItem
          v-for="edge in $page.tag.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="$page.tag.path"
          :currentPage="$page.tag.belongsTo.pageInfo.currentPage"
          :totalPages="$page.tag.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    tag(id: $id) {
      title
      path
      belongsTo(perPage: 5, page: $page) @paginate {
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
      title: this.$page.tag.title
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 3rem;
}

.tag-title {
  font-size: 3rem;
  padding-bottom: 0;
  margin-bottom: 0;
}

.tag-subtitle {
  color: #4a5568;
  font-size: 1.25rem;
}
</style>