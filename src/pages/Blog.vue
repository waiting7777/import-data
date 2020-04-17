<template>
  <Layout>
    <h1 class="my-4 mb-5">Blog</h1>
  </Layout>
</template>

<page-query>
query($page: Int) {
	entries: allBlog(perPage: 9, page: $page) @paginate {
    totalCount
  }
}
</page-query>