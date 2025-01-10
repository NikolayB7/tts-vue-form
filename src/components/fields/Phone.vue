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
  {{label}}
  <div class="el-input">

    <div class="el-input__wrapper">
      <IntlTelInput
          @input="handleInput"
          :value="value"
          class="el-input__inner"
          :options="{
      initialCountry: 'us',
    }"
      />
    </div>
  </div>
</template>

<style>
.iti{
  width: 100% !important;
}
</style>