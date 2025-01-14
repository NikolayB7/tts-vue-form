<script setup>
import {inject, ref, defineProps, watch} from 'vue'

defineOptions({
    inheritAttrs: false
})

const props = defineProps({
    label: String,
    field_name: String,
    placeholder: String,
    type: String,
})
const formValues = inject('formValues')
const value = ref(formValues[props.field_name] !== null ? formValues[props.field_name] : '');
const updateValue = inject('updateValue')

const handleInput = (event) => {
    if (updateValue) {
        updateValue(props.field_name, event)
    }
    formValues[props.field_name] = event
}

</script>

<template>
    <div class="block text-base font-medium text-black mb-1">
        {{ label }}
    </div>
    <el-input
        class="custom-field"
        :type="type"
        :placeholder="placeholder"
        v-model="value"
        @input="handleInput"
    >
    </el-input>
</template>

<style scoped>
[type="text"]{
    border:none !important;
}
.custom-field :deep(textarea){
    @apply border-gray-300 rounded-xl h-24 w-full text-black placeholder-gray-500
}
.custom-field :deep(.el-input__wrapper){
    @apply text-sm px-4 py-2 border border-gray-300 rounded-lg;
}
</style>
