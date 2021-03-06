<template>
  <Layout>
    <div class="container">
      <section class="post-image">
        <g-image :src="$page.blog.image" alt="blog.image"></g-image>
      </section>
      <div class="section-container">
        <section class="post-header">
          <div class="post-category-title mb-1">
            <g-link :to="$page.blog.category.path">
              {{ $page.blog.category.title }}
            </g-link>
          </div>
          <h1 class="post-title">{{ $page.blog.title }}</h1>
          <div class="post-excerpt">{{ $page.blog.excerpt }}</div>
        </section>
        <section class="post-author-list">
          <div class="d-flex align-items-center">
            <div class="d-flex justify-content-between align-items-center">
              <div class="author-list">
                <div v-for="author in $page.blog.author" :key="author.id" class="author-list-item">
                  <g-link :to="author.path">
                    <g-image :src="author.image" class="author-list-image" alt="author.image"></g-image>
                  </g-link>
                </div>
              </div>
            </div>
            <div class="author-list-text">
              <div class="mb-1">
                <span v-for="(author, index) in $page.blog.author" :key="author.id">
                  <g-link :to="author.path">{{ author.name }}</g-link>
                  <span v-if="index < $page.blog.author.length - 1">, </span>
                </span>
              </div>
              <div class="text-gray">
                <time :datetime="$page.blog.datetime">{{ $page.blog.humanTime }}</time>
                &nbsp;&middot;&nbsp; {{ $page.blog.timeToRead }} min read
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="section-container">
        <section>
          <div class="post-content-text text-xl markdown-body" v-html="$page.blog.content"></div>
        </section>
        <section class="post-tags">
          <g-link v-for="tag in $page.blog.tags" :key="tag.id" :to="tag.path" class="post-tag">
            <span>#{{ tag.title }}</span>
          </g-link>
        </section>
      </div>
      <section class="post-related section-container">
        <h4 class="post-related-title">類似文章</h4>
        <div class="post-related-contain">
          <PostListItem v-if="$page.previous" :record="$page.previous" :border=false></PostListItem>
          <PostListItem v-if="$page.next" :record="$page.next" :border=false></PostListItem>
        </div>
      </section>
      <section class="section-container">
        <div class="comments">
          <vue-disqus shortname="waiting7777" :identifier="$page.blog.id"></vue-disqus>
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $previousElement: ID!, $nextElement: ID!) {
    blog(id: $id) {
      id
      title
      path
      image(width:1600, height:800)
      image_caption
      excerpt
      content
      humanTime : date(format:"DD MMMM YYYY")
      datetime : date(format:"ddd MMM DD YYYY hh:mm:ss zZ")
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

<script>
import PostListItem from "~/components/PostListItem.vue"
import 'highlight.js/styles/github.css';
import hljs from 'highlight.js';
export default {
  components: {
    PostListItem
  },
  metaInfo() {
    return {
      title: this.$page.blog.title,
      meta: [
        { key: 'description', property: 'og:description', content: this.$page.blog.excerpt },
        { key: 'image', property: 'og:image', content: this.$page.blog.image.src }
      ]
    }
  },
  mounted() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 4rem;
}
.section-container {
  margin-left: 8rem;
  margin-right: 8rem;
  margin-bottom: 3rem;
}

.post-header {
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1rem;
}

.post-category-title {
  a {
    letter-spacing: .025em;
    text-transform: uppercase;
    font-size: 1.25rem;
    color: #4299e1;
  }
}

.post-title {
  font-size: 3rem;
  margin-top: 0;
  line-height: 1;
}

.post-excerpt {
  font-size: 1.5rem;
  color: #4a5568;
  padding-bottom: 2.5rem;
  padding-top: 1rem;
}

.post-author-list {
  margin-bottom: 2.5rem;
  margin-left: 0;
  margin-right: 0;
}

.author-list {
  display: flex;
  margin-left: 1.25rem;
}

.author-list-image {
  width: 2rem;
  height: 2rem;
  border: 2px solid #fff;
  border-radius: 9999px;
  background-color: #edf2f7;
}

.author-list-text {
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-left: 0.75rem;
  line-height: 1;
  flex-direction: column;
  display: flex;
}

.post-image {
  margin: 2.5rem 4rem;

  img {
    width: 100%;
    border-radius: 0.5rem;
  }
}

.post-tags {
  margin-top: 2.5rem;
}

.post-tag {
  color: #4299e1;
  margin-right: 10px;
}

.post-related-title {
  margin-bottom: 1rem;
}

.post-related-contain {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
}

::v-deep {
  .post-related-contain {
    .post-card {
      box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
    }
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding-top: 3rem;
  }
  .post-title {
    font-size: 2.75rem;
  }
  .post-excerpt {
    font-size: 1.25rem;
  }
  .section-container {
    margin-left: 0;
    margin-right: 0;
  }
  .post-image {
    margin: 2rem 0;
  }
  .post-related-contain {
    grid-template-columns: 1fr;
  }

  ::v-deep {
    .post-related-contain {
      .post-card {
        padding: 0 1rem 2rem 1rem;
      }
    }
  }
}
</style>