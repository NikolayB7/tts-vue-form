<script setup>
import { defineProps } from "vue";
defineProps({
  steps:Array
})
</script>

<template>
  <div
      v-for="(item,index) in steps"
      :key="index"
      :class="item.visible ? 'text-black' : 'text-gray-400'"
  >
    {{item.title}}
  </div>
</template>

<style scoped>

</style>