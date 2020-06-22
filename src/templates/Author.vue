<template>
  <Layout>
    <div class="container">
      <div class="section-container">
        <div class="avatar-contain">
          <g-image :src="$page.author.image" class="avatar" alt="author.image"></g-image>
        </div>
        <div class="text-contain">
          <h1>{{ $page.author.name }}</h1>
          <p v-if="$page.author.bio">{{ $page.author.bio }}</p>
          <div class="author-social">
            <span>{{ $page.author.belongsTo.totalCount }} posts</span>
            <span>·</span>
            <span>
              <a
                :href="$page.author.twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
            </span>
            <span>
              <a
                :href="$page.author.github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </span>
            <span>
              <a
                :href="$page.author.twitch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon :icon="['fab', 'twitch']" />
              </a>
            </span>
            <span>
              <a
                :href="$page.author.linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="seperator"></div>
      <div class="list-item">
        <PostListItem
          v-for="edge in $page.author.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="$page.author.path"
          :currentPage="$page.author.belongsTo.pageInfo.currentPage"
          :totalPages="$page.author.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.author.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    author(id: $id) {
      name
      path
      bio
      image(width:150, height:150)
      twitter
      github
      twitch
      linkedin
      belongsTo(perPage: 10, page: $page) @paginate {
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
              humanTime : date(format:"DD MMM YYYY")
              datetime : date
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
import Pagination from '~/components/Pagination.vue'

export default {
  components: {
    PostListItem, Pagination
  },
  metaInfo() {
    return {
      title: this.$page.author.name
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 3rem;
}
.section-container {
  display: flex;
  flex-direction: row;
}
.avatar-contain {
  width: 16.6667%;
  margin: 0;
  text-align: center;
}
.avatar {
  width: 8rem;
  height: 8rem;
  margin: 0;
  border: 4px solid #cbd5e0;
  border-radius: 9999px; 
}
.text-contain {
  width: 83.3334%;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.author-social {
  display: flex;
  align-items: center;

  span+span {
    margin-left: .5rem;
  }
}
</style>