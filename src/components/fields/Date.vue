<script setup>
import { computed, defineProps, inject, onMounted, ref } from 'vue'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  label: String,
  field_name: String,
  placeholder: String
})
const formValues = inject('formValues')
const value = ref(formValues[props.field_name] !== null ? formValues[props.field_name] : '')
const formattedDate = computed(() => {
  if (!value.value) return null

  const date = new Date(value.value)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Месяцы начинаются с 0
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
})

const updateValue = inject('updateValue')

const handleInput = (event) => {
  if (updateValue) {
    updateValue(props.field_name, formattedDate)
  }
    formValues[props.field_name] = formattedDate
}
</script>

<template>
  {{ label }}
  <el-date-picker
    class="!w-full"
    v-model="value"
    type="datetime"
    format="YYYY-MM-DD HH:mm"
    @change="handleInput"
    :placeholder="placeholder"
  >
  </el-date-picker>
</template>

<style scoped></style>
