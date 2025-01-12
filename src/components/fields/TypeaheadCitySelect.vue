<script setup>
import {defineProps, defineModel} from "vue";
import {useCitiesQuery} from "../../query/useCitiesQuery.js";

const model = defineModel();

const props = defineProps({
  label: String,
  fieldName: String,
  placeholder: String,
  options: Array,
});

const {cities} = useCitiesQuery();
console.log(cities)
</script>

<template>
  <div class="flex-1">
    <label for="from" class="block text-base font-medium text-black">{{ label }}</label>
    <div class="flex items-center mt-1 space-x-2">
      <vue3-simple-typeahead
          :id="fieldName"
          class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500"
          :placeholder="placeholder"
          :items="[{
            id: 1,
            name: 'Venice'
          }, {
            id: 2,
            name: 'Verona'
          }, {
            id: 3,
            name: 'Milan'
          }, {
            id: 4,
            name: 'Rome'
          }, {
            id: 5,
            name: 'Florence'
          }]"
          :minInputLength="1"
          :maxVisibleItems="5"
          :itemProjection="item => item.name"
          v-model="model"
          :defaultItem="{
            id: 1,
            name: 'Venice2'
          }"
          @selectItem="(item) => console.log(item)"
      />
    </div>
  </div>
</template>