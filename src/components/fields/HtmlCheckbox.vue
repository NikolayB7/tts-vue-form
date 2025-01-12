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
  <div class="flex-1 flex gap-3 items-center">
    <input :id="fieldName" type="checkbox" v-model="model">
    <label :for="fieldName" class="block text-base font-medium text-black">{{ label }}</label>
  </div>
</template>