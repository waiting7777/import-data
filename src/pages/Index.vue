<template>
  <Layout>
    <Hero />
    <div class="container">
      <div class="d-flex flex-wrap list-contain">
        <PostListItem v-for="edge in $page.entries.edges" :key="edge.node.id" :record="edge.node" />
      </div>
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
        humanTime: date(format:"DD MMM YYYY")
        dateTime: date
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
import Hero from '~/components/Hero.vue'
export default {
  metaInfo: {
    title: 'Import Data'
  },
  components: {
    PostListItem,
    Hero
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .list-contain {
    padding-top:  4rem;
    &>.flex-post:nth-child(6n+1) {
      flex: 1 1 100%;
      flex-direction: row;

      .post-card-image-link {
        flex: 1 1 auto;
        position: relative;
        min-height: 350px;
        margin-right: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .post-card-image {
        position: absolute;
        height: 100%;
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: .5rem;
      }

      .post-card-content {
        flex: 0 1 361px;
        align-self: center;
        height: auto;
      }

      .post-card-title {
        font-size: 2.25rem;
      }

      .post-card-excerpt {
        font-size: 1.25rem;
      }
    }

    &>.flex-post:nth-child(6n+2), &>.flex-post:nth-child(6n+3), &>.flex-post:nth-child(6n+4){
      max-width: 33%;
    }

    &>.flex-post:nth-child(6n+5), &>.flex-post:nth-child(6n+6) {
      max-width: 50%;
      .post-card-image {
        height: 17rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .list-contain {
      padding-top: 2rem;

      .flex-post {
        padding-bottom: 1rem;
      }

      &>.flex-post:nth-child(6n+1) {
        flex-direction: column;

        .post-card-image-link {
          margin-right: 0;
          min-height: auto;
        }

        .post-card-image {
          position: initial;
          width: 100%;
          height: 14rem;
        }

        .post-card-title {
          font-size: 1.75rem;
        }

        .post-card-excerpt {
          font-size: 1rem;
        }

        .post-card-content {
          flex: 0 1 auto;
        }
      }

      &>.flex-post:nth-child(6n+2), &>.flex-post:nth-child(6n+3), &>.flex-post:nth-child(6n+4){
        max-width: 100%;
      }

      &>.flex-post:nth-child(6n+5), &>.flex-post:nth-child(6n+6) {
        max-width: 100%;

        .post-card-image {
          height: auto;
        }
      }
    }
  }
}
</style>


