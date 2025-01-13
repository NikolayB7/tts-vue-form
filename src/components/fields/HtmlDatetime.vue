<script setup>
import {defineProps, defineModel} from "vue";

const model = defineModel();

const props = defineProps({
  label: String,
  fieldName: String,
  placeholder: String,
});

</script>

<template>
  <div class="flex-1">
    <label v-if="fieldName" :for="fieldName" class="block text-base font-medium text-black">{{ label }}</label>
    <div class="flex items-center mt-1 space-x-2">
      <input :id="fieldName"
             type="datetime-local"
             :placeholder="placeholder"
             :name="fieldName"
             forma="d.m.Y H:i"
             v-model="model"
             class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
    </div>
  </div>
</template>