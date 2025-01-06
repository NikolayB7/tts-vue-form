<script setup>
import { inject, ref, defineProps } from 'vue'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  label: String,
  field_name: String,
  placeholder: String,
  type: String
})
const value = ref('')
const getValue = inject('updateValue')

const handleInput = (event) => {
  if (getValue) {
    getValue(props.field_name, event)
  }
}
</script>

<template>
  {{ label }}
  <el-input :type="type" :placeholder="placeholder" v-model="value" @input="handleInput"></el-input>
</template>

<style scoped></style>
