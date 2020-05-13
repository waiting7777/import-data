<template>
  <div class="tag" :class="[`text-${color}`, `border-${color}`]">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    color: {
      type: String,
      default: 'gray'
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  font-size: .75rem;
  padding: .5rem 1rem;
  margin-right: .5rem;
  border-radius: 9999px;
}
</style>