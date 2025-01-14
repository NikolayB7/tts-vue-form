<script setup>

import {defineProps, inject, ref} from "vue";

const props = defineProps({
  label: String,
  field_name:String
});

const checked=ref(false)
const updateValue = inject('updateValue')

const handleInput = (event) => {
  if (updateValue) {
    updateValue(props.field_name, event);
  }
};
</script>

<template>
  <el-checkbox
      class="custom-field"
      v-model="checked"
      @change="handleInput"
  >
    {{ label }}
  </el-checkbox>
</template>

<style scoped>
[type='checkbox']{
    border: none;
}
.custom-field :deep(.el-checkbox__label){
    @apply text-base font-medium text-black ml-2
}
</style>