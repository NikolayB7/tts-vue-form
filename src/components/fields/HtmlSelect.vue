<script setup>
import {defineProps, defineModel} from "vue";

const model = defineModel();

const props = defineProps({
  label: String,
  fieldName: String,
  placeholder: String,
  options: Array,
});

</script>

<template>
  <div class="flex-1">
    <label for="{{ fieldName }}" class="block text-base font-medium text-black">{{ label }}</label>
    <div class="flex items-center mt-1 space-x-2">
      <select
          v-model="model"
          name="{{ fieldName }}"
          id="fld{{ fieldName }}"
          class="border-gray-300 rounded-xl">
        <option hidden value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
      </select>
    </div>
  </div>
</template>