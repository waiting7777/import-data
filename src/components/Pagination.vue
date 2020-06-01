<template>
  <ul class="pagination">
    <li class="pagination-element" v-if="!isFirstPage(currentPage, totalPages)">
      <g-link :to="previousPage(currentPage,totalPages)" tabindex="-1" >&laquo;</g-link>
    </li>

    <li 
    v-for="page in pages" :key="page.name"
    v-bind:class="[isCurrentPage(currentPage, page.name) ? 'border-l-black' : '']"
    class="pagination-element">
      <g-link
          :to="page.link"
          :aria-label="page.name"
          :aria-current="page.name"
        >{{page.name}}</g-link>
    </li>

    <li class="pagination-element" v-if="!isLastPage(currentPage, totalPages)">
      <g-link :to="nextPage(currentPage,totalPages)" tabindex="-1" >&raquo;</g-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    baseUrl: String,
    currentPage: Number,
    totalPages: Number,
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    }
  },
  methods: {
    isFirstPage(currentPage, totalPages) {
        return currentPage == 1;
    },
    isLastPage(currentPage, totalPages) {
        return currentPage == totalPages;
    },
    isCurrentPage(currentPage, pageElement) {
        return currentPage == pageElement;
    },
    nextPage(currentPage, totalPages) {
      return `${this.baseUrl}/${currentPage + 1}`;
    },
    previousPage(currentPage, totalPages) {
      return currentPage === 2
        ? `${this.baseUrl}/`
        : `${this.baseUrl}/${currentPage - 1}`;
    }
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.currentPage - 1;
      }
      return this.currentPage - 1;
    },
    pages() {
      const range = [];
      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i += 1
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
          link: i === 1 ? `${this.baseUrl}/` : `${this.baseUrl}/${i}`
        });
      }
      return range;
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  list-style-type: none;
  padding-left: 0;
  margin-top: .5rem;
  margin-bottom: .5rem;
  border-radius: .25rem;

  &-element {
    width: 2.5rem;
    height: 2.5rem;
    position: relative;
    padding-top: .5rem;
    padding-bottom: .5rem;
    margin-left: .25rem;
    margin-right: .25rem;
    line-height: 1;
    display: block;
    border: 1px solid #e2e8f0;
    border-radius: .25rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #000;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
}

.border-l-black {
  border-left: 2px solid #000;
}
</style>