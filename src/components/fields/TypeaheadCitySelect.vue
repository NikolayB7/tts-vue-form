<script setup>
import {defineProps, defineModel, ref, onMounted, useTemplateRef} from "vue";
import {useCitiesQuery} from "../../query/useCitiesQuery.js";
import axios from "axios";
import {useSelectCity} from "../../hooks/useSelectCity.js";

const model = defineModel();

const props = defineProps({
  label: String,
  fieldName: String,
  placeholder: String,
  options: Array,
});

const inputRef = useTemplateRef('inputRef');

const onSelectInputHandler = (item) => {
  model.value = {
    id: item.id,
    name: item.name,
  };
  //
  // if (inputRef.value) {
  //   setTimeout(() => {
  //     inputRef.value.getInput().value = item.name;
  //     inputRef.value.getInput().dispatchEvent(new Event('input'));
  //   }, 0);
  // }
};

const {
  options
} = useCitiesQuery();  // Используем хук

</script>

<template>
  <div class="flex-1">
    <label for="from" class="block text-base font-medium text-black">{{ label }}</label>
    <div class="flex items-center mt-1 space-x-2">
      <vue3-simple-typeahead
          ref="inputRef"
          :id="fieldName"
          class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500"
          :placeholder="placeholder"
          :items="options"
          :minInputLength="0"
          :maxVisibleItems="5"
          :itemProjection="item => item.name"
          @selectItem="onSelectInputHandler"
      >
        <template #list-item-text="slot"><span v-html="slot.boldMatchText(slot.item.name)"></span></template>
      </vue3-simple-typeahead>
    </div>
  </div>
</template>
