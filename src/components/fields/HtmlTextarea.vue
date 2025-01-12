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
  <div class="flex-1 mt-4 sm:mt-6 mb-4 sm:mb-6">
    <label :for="fieldName" class="block text-base font-medium text-black">{{  label }}</label>
    <div class="flex items-center mt-1 space-x-2">
            <textarea :id="fieldName"
                      :placeholder="placeholder"
                      :name="fieldName"
                      v-model="model"
                      class="border-gray-300 rounded-xl h-24 w-full text-black placeholder-gray-500"></textarea>
    </div>
  </div>
</template>