<script setup>
import {computed, defineProps, inject, ref} from "vue";

const props = defineProps({
  label: String,
  field_name:String,
  placeholder:String
});

const value = ref();
const formattedDate = computed(() => {
  if (!value.value) return null;

  const date = new Date(value.value);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
});

const getValue = inject('updateValue')

const handleInput = (event) => {
  if (getValue) {
    getValue(props.field_name, formattedDate);
  }
};

</script>

<template>
  {{label}}
  <div>
    <el-date-picker
        class="!w-full"
        v-model="value"
        type="datetime"
        @change="handleInput"
        :placeholder="placeholder">
    </el-date-picker>
  </div>
</template>

<style scoped>

</style>