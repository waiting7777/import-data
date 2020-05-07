<template>
  <span
    class="text-xs bg-transparent  py-2 px-4 mr-2 border border-gray-600 rounded-full"
    :class="[`text-${color}-700`, `border-${color}-600`]"
  >
    {{ text }}
  </span>
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