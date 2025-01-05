<script setup>
import {defineProps, ref, onMounted, inject} from 'vue';
import axios from 'axios';

const props = defineProps({
  label: String,
  field_name: String,
  placeholder: String
});

const value = ref('');
const options = ref([]);
const allOptions = ref([]); // Хранит все данные после начальной загрузки

// Загружаем все данные при монтировании
const fetchAllOptions = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_CITIES_API);
    // Сохраняем все данные для локального поиска
    allOptions.value = response.data.map((item) => ({
      name: item.name,
      value: item.id,
      tags: item.tags.toLowerCase().split(', '), // Преобразуем теги в массив и приводим к нижнему регистру
    }));
    options.value = allOptions.value; // По умолчанию отображаем все данные
  } catch (error) {
    console.error('Error fetching options:', error);
  }
};

// Локальный поиск по name и tags
const filterOptions = (query) => {
  if (!query.trim()) {
    options.value = allOptions.value; // Если запрос пустой, показываем все данные
    return;
  }

  const lowerQuery = query.toLowerCase();
  options.value = allOptions.value.filter(
      (item) =>
          item.name.toLowerCase().includes(lowerQuery) || // Поиск по имени
          item.tags.some((tag) => tag.includes(lowerQuery)) // Поиск по тегам
  );
};

onMounted(() => {
  fetchAllOptions(); // Загружаем данные при загрузке компонента
});

const getValue = inject('updateValue')

const handleInput = (event) => {
  if (getValue) {
    getValue(props.field_name, event);
  }
};
</script>

<template>
  <div>
    {{ label }}
    <el-select
        v-model="value"
        @change="handleInput"
        filterable
        :placeholder="placeholder"
        :remote="true"
        :remote-method="filterOptions"
        :loading="options.length === 0"
    >
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.name"
          :value="item.value"
      />
    </el-select>
  </div>
</template>

<style scoped>
</style>
