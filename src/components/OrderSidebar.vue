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
    <div>
      <p class="text-2xl flex items-center gap-3">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.9 8.1L4.5 9.5L9 14L19 4L17.6 2.6L9 11.2L5.9 8.1ZM18 10C18 14.4 14.4 18 10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C10.8 2 11.5 2.1 12.2 2.3L13.8 0.7C12.6 0.3 11.3 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10H18Z"
                fill="#1E8190"/>
        </svg>
        <span>{{item.title}}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>