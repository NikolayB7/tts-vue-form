<script setup>
import { defineProps, inject } from 'vue';
import { useSelectCity } from '../../hooks/useSelectCity.js';

const props = defineProps({
    label: String,
    field_name: String,
    placeholder: String
});

const updateValue = inject('updateValue');
const formValues = inject('formValues')
const {value, options, filterOptions, handleInput} = useSelectCity(props.field_name, updateValue,formValues);  // Используем хук
</script>

<template>
    <div>
        <div class="block text-base font-medium text-black mb-1">
            {{ label }}
        </div>
        <el-select
            class="custom-field"
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
.custom-field :deep(.el-select__wrapper) {
    @apply text-sm px-4 py-3 border border-gray-300 rounded-lg;
}
</style>
