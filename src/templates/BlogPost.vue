<template>
  <Layout>
    <div class="lg:mx-32 md:mx-16 sm:mx-8 default:mx-4 blog-post-container">
      <section class="blog-post-header">
        <span class="text-blue font-medium uppercase tracking-wide text-sm">
          <g-link
            :to="$page.blog.category.path"
            class="hover:underline"
          >{{ $page.blog.category.title }}</g-link>
        </span>
        <h1 class="text-5xl font-medium leading-none mt-0">{{ $page.blog.title }}</h1>
        <div class="text-2xl text-gray blog-post-excerpt">{{ $page.blog.excerpt }}</div>
      </section>
      <section class="blog-post-author-list">
        <div class="d-flex align-items-center">
          <div class="d-flex justify-content-between align-items-center">
            <ul class="list-none d-flex blog-post-author">
              <li v-for="author in $page.blog.author" :key="author.id" class="blog-post-author-list-item">
                <g-link :to="author.path" v-b-tooltip.hover :title="author.name">
                  <g-image
                    :src="author.image"
                    :alt="author.name"
                  />
                </g-link>
              </li>
            </ul>
          </div>
          <div class="d-flex flex-column text-xs leading-none uppercase blog-post-author-text">
            <p>
              <span v-for="(author, index) in $page.blog.author" :key="author.id">
                <g-link
                  :to="author.path"
                  v-b-tooltip :title="author.name"
                >{{ author.name }}</g-link>
                <span v-if="index < $page.blog.author.length-1">,</span>
              </span>
            </p>
            <p class="text-gray">
              <time :datetime="$page.blog.datetime">{{ $page.blog.humanTime }}</time>
              &nbsp;&middot;&nbsp; {{ $page.blog.timeToRead }} min read
            </p>
          </div>
        </div>
      </section>
    </div>
    <section class="post-image mx-auto w-full">
      <g-image :src="$page.blog.image"></g-image>
    </section>
    <div class="lg:mx-32 md:mx-16 default:px-4 sm:px-0">
        <section class="post-content mx-auto relative font-serif text-gray-700">
          <div class="post-content-text text-xl" v-html="$page.blog.content"></div>
        </section>

        <section class="post-tags container mx-auto relative py-10">
          <g-link
            v-for="tag in $page.blog.tags"
            :key="tag.id"
            :to="tag.path"
            class="text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full"
          >{{ tag.title }}</g-link>
        </section>
      </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $previousElement: ID!, $nextElement: ID!) {
    blog(id: $id) {
      title
      path
      image(width:1600, height:800)
      image_caption
      excerpt
      content
      humanTime : created(format:"DD MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      timeToRead
      tags {
        id
        title
        path
      }
      category {
        id
        title
        path
        belongsTo(limit:4) {
          totalCount
          edges {
            node {
              ... on Blog {
                title
                path
              }
            }
          }
        }
      }
      author {
        id
        name
        image
        path
      }
      tags {
        id
        title
        path
      }
    }

    previous: blog(id: $previousElement) {
      title
      excerpt
      image(width:800)
      path
      timeToRead
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

    next: blog(id: $nextElement) {
      title
      excerpt
      image(width:800)
      path
      timeToRead
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
</page-query>

<style lang="scss" scoped>
.blog-post-container {
  padding-top: 2rem;
}

.blog-post-header {
  padding: 0;
  margin: 0 auto 1rem auto;
  border-bottom: 1px solid #e2e8f0;
}

.blog-post-excerpt {
  padding-top: 1rem;
  padding-bottom: 2.5rem;
  font-family: Georgia,Cambria,Times New Roman,Times,serif;
}

.blog-post-author-list {
  margin: 0 0 2.5rem 0;
}

.blog-post-author {
  margin-bottom: 0;
  padding-left: 0;
  margin-left: 1.25rem;
}

.blog-post-author-list-item {
  img {
    width: 2.5rem;
    height: 2.5rem;
    border: 2px solid #fff;
    border-radius: 9999px;
    background-color: #edf2f7;
  }
}

.blog-post-author-text {
  padding-left: .75rem;
}

</style>