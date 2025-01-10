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
    {{ label }}
    <el-input :type="type" :placeholder="placeholder" v-model="value" @input="handleInput"></el-input>
</template>

<style scoped></style>
