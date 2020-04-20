<template>
  <div class="post-card">
    <g-link :to="record.path" class="post-card-image-link shadow">
      <g-image :src="record.image" class="post-card-image"></g-image>
    </g-link>
    <div class="post-card-content">
      <g-link :to="record.path">
        <p class="post-card-category-title uppercase text-xs text-blue font-medium">{{ record.category.title }}</p>
        <h2 class="post-card-title mt-0">
          {{ record.title }}
        </h2>
        <p class="post-card-excerpt">{{ record.excerpt }}</p>
      </g-link>
      <div class="post-card-meta">
        <div class="avatars">
          <div class="d-flex align-items-center">
            <div class="d-flex justify-content-between align-items-center">
              <ul class="list-none d-flex post-card-author-list">
                <li v-for="author in record.author" :key="author.id" class="author-list-item">
                  <g-link :to="author.path">
                    <g-image
                      :src="author.image"
                      :alt="author.name"
                      class="post-card-avatars-image"
                    />
                  </g-link>
                </li>
              </ul>
            </div>
            <div class="post-card-author-text d-flex flex-column text-xs uppercase">
              <p>
                <time
            
            :datetime="record.datetime"
          >{{ record.humanTime }}</time>
              </p>
              <p>
                {{ record.timeToRead }} min
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    record: {}
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  display: flex;
  flex: 1 1 300px;
  width: 100%;
  padding: 0 1rem 2rem 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
  flex-direction: column;

  &:nth-child(6n+5), &:nth-child(6n+6) {
    .post-card-image {
      min-height: 18rem;
    }
  }

  &:nth-child(6n+1) {
    flex: 1 1 100%;
    flex-direction: row;

    .post-card-image-link {
      flex: 1 1 auto;
      position: relative;
      min-height: 380px;
      margin-right: 1.5rem;
    }

    .post-card-image {
      height: 100%;
      position: absolute;
    }

    .post-card-content {
      flex: 0 1 361px;
      align-self: center;
      justify-content: center;
    }

    .post-card-title {
      font-size: 2.25rem;
    }

    .post-card-excerpt {
      font-size: 1.25rem;
    }
  }

  .post-card-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card-category-title {
    margin-top: .75rem;
  }

  .post-card-image {
    width: 100%;
    height: 14rem;
    object-fit: cover;
    border-radius: .5rem;
    position: relative;
  }

  .post-card-title {
    line-height: 1;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .post-card-meta {
    width: 100%;
    padding-top: 1rem;
  }

  .post-card-author-list {
    margin: 0;
    padding: 0;
    margin-left: 1.25rem;
  }

  .post-card-author-text {
    padding-left: .75rem;
    margin-left: .75rem;
    line-height: 1;
    border-left: 1px solid #e2e8f0;
  }

  .post-card-avatars-image {
    width: 2rem;
    height: 2rem;
    border: 2px solid #fff;
    border-radius: 9999px;
    background-color: #edf2f7;
    max-width: 100%;
  }
}
</style>