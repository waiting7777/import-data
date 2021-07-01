<template>
  <div class="d-flex flex-post post-card" :class="{ 'no-border': !border }">
    <g-link :to="record.path" class="post-card-image-link">
      <g-image :src="record.image" class="post-card-image" alt="record.image"></g-image>
    </g-link>
    <div class="post-card-content">
      <g-link class="post-card-link" :to="record.path">
        <p class="post-card-category-title">{{ record.category.title }}</p>
        <h2 class="post-card-title">{{ record.title }}</h2>
        <p class="post-card-excerpt">{{ record.excerpt }}</p>
      </g-link>
      <div class="post-card-meta">
        <div>
          <div class="avatars">
            <div class="avatars-item">
              <div class="author-list">
                <div v-for="author in record.author" :key="author.id" class="author-list-item">
                  <g-link :to="author.path">
                    <g-image :src="author.image" class="author-list-image" alt="author.image"></g-image>
                  </g-link>
                </div>
              </div>
            </div>
            <div class="author-list-text text-gray">
              <div class="mb-1">
                <time :datetime="record.datetime">{{ record.humanTime }}</time>
              </div>
              <div>
                {{ record.timeToRead }} min
              </div>
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
    record: {},
    border: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-post {
  padding: 0 1rem 2rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 2rem;
  flex: 1 1 300px;
  flex-direction: column;
  width: 100%;
}

.post-card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.post-card-link {
  flex-grow: 1;
}

.post-card-image {
  height: 14rem;
  width: 100%;
  object-fit: cover;
  border-radius: .25rem;
  position: relative;
}

.post-card-category-title {
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #2b6cb0;
  margin-top: 0.75rem;
}

.post-card-title {
  font-size: 1.5rem;
}

.post-card-excerpt {
  font-size: 1rem;
}

.post-card-meta {
  width: 100%;
  padding-top: 1rem;
}

.avatars {
  display: flex;
  align-items: center;
}

.avatars-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding-left: 0.75rem;
  margin-left: 0.75rem;
  line-height: 1;
  flex-direction: column;
  display: flex;
  border-left: 1px solid #e2e8f0;
}

@media screen and (max-width: 768px) {
  .flex-post {
    padding: 0 0 1rem 0;
  }
}
</style>
