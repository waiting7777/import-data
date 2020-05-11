<template>
  <div class="flex flex-post px-0 sm:px-4 pb-8 mb-8" :class="{ 'no-border': !border }">
    <g-link :to="record.path" class="post-card-image-link">
      <g-image :src="record.image" class="post-card-image"></g-image>
    </g-link>
    <div class="post-card-content flex flex-col justify-between">
      <g-link :to="record.path">
        <p class="uppercase font-medium text-xs text-blue-700 mt-3">{{ record.category.title }}</p>
        <h2 class="post-card-title mt-0">{{ record.title }}</h2>
        <p class="post-card-excerpt">{{ record.excerpt }}</p>
      </g-link>
      <div class="post-card-meta w-full pt-4">
        <div class="avatars">
          <div class="flex items-center">
            <div class="flex justify-between items-center">
              <ul class="list-none flex author-list">
                <li v-for="author in record.author" :key="author.id" class="author-list-item">
                  <g-link :to="author.path">
                    <g-image :src="author.image" class="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></g-image>
                  </g-link>
                </li>
              </ul>
            </div>
            <div class="ml-3 pl-3 border-l flex flex-col text-xs leading-none uppercase">
              <p>
                <time :datetime="record.datetime">{{ record.humanTime }}</time>
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
    record: {},
    border: {
      type: Boolean,
      default: true
    }
  }
}
</script>
