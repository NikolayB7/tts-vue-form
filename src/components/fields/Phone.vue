<script setup>
import IntlTelInput from "intl-tel-input/vueWithUtils";
import "intl-tel-input/styles";
import {defineProps, inject, ref} from "vue";

defineOptions({
    inheritAttrs: false
})

const props = defineProps({
    label: String,
    field_name:String
});
const formValues = inject('formValues')
const value = ref(formValues[props.field_name] !== null ? formValues[props.field_name] : '')
const updateValue = inject('updateValue')
const handleInput = (event) => {
    if (updateValue) {
        updateValue(props.field_name, event.target.value);
    }
    formValues[props.field_name] = event.target.value
};
</script>

<template>
    <div class="block text-base font-medium text-black mb-1">
        {{ label }}
    </div>
    <div class="custom-field">
        <IntlTelInput
            @input="handleInput"
            :value="value"
            :options="{
              initialCountry: 'us',
            }"
        />
    </div>

</template>

<style scoped>
.custom-field :deep(.iti){
    @apply w-full
}
.custom-field :deep(.iti__tel-input){
    @apply text-sm px-4 py-3 border border-gray-300 rounded-lg w-full;
}
</style>
