<script setup>

import {inject} from "vue";
import EditCar from "./EditCar.vue";

defineProps({
  title:String,
  iteration:Number,
})
const validateStep = inject('validateStep')
const renderEditInfo = inject('renderEditInfo')
</script>

<template>
  <div>
    <div class="flex justify-end -mt-8">
      <button
          class="text-gray-400"
          @click="validateStep(iteration)"
      >
        Изменить
      </button>
    </div>
    <div v-if="renderEditInfo[iteration]['car'] && iteration == 1">
      <EditCar
          :car=" Object.values(renderEditInfo[iteration])[0]"
          :selected="true"
      />
    </div>

    <div
        v-else
        v-for="[key, value] in Object.entries(renderEditInfo[iteration])"
        :key="key"
        class="flex justify-between border-dotted border-x-0 border-t-0 border-2"
    >
      <div>{{ key }}</div>
      <div>{{ value }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>