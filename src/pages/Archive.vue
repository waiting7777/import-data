<template>
  <Layout>
    <div class="container">
      <h1>Archive</h1>
      <div class="seperator"></div>
      <ul class="list">
        <li v-for="blog in $page.allBlog.edges" :key="blog.node.id">
          <span class="archive-date">
            {{ $dayjs(blog.node.date).format('YYYY/MM/DD') }}
          </span>
          <g-link :to="blog.node.path" class="hover-link">
            <span class="archive-title">
              {{ blog.node.title }}
            </span>
          </g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
  query {
    allBlog(order: DESC) {
      edges {
        node {
          id,
          title,
          path,
          date
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Archive'
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 3rem;
  padding-bottom: 3rem;
  min-height: calc(100vh - 101px);
}
.archive-date {
  margin-right: 0.5rem;
}
.archive-title {
  text-decoration: underline;
}
</style>