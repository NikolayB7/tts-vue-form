<script setup>
import {computed, defineProps, inject, onMounted, ref,nextTick} from "vue";

const props = defineProps({
  label: String,
  field_name:String,
  placeholder:String
});
const isLoading = ref(true)
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
onMounted(()=>{
  // @TODO закончить скелетон при загрузке, или убрать баг с анимацией
  nextTick(() => {
    isLoading.value = false;
  });
})
</script>

<template>
  {{label}}
  <div>
    <el-skeleton :loading="isLoading" animated>
      <template #template>
        <el-skeleton-item variant="input" />
        <el-skeleton-item variant="input" style="margin-top: 20px;" />
      </template>
      <template #default>
        <!-- Компоненты -->
        <el-date-picker
            class="!w-full"
            v-model="value"
            type="datetime"
            @change="handleInput"
            :placeholder="placeholder">
        </el-date-picker>
      </template>
    </el-skeleton>

  </div>
</template>

<style scoped>

</style>