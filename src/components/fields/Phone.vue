<script setup>
import IntlTelInput from "intl-tel-input/vueWithUtils";
import "intl-tel-input/styles";
import {defineProps, inject} from "vue";

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  label: String,
  field_name:String
});

const getValue = inject('updateValue')
const handleInput = (event) => {
  if (getValue) {
    getValue(props.field_name, event.target.value);
  }
};
</script>

<template>
  {{label}}
  <div class="el-input">

    <div class="el-input__wrapper">
      <IntlTelInput
          @input="handleInput"
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