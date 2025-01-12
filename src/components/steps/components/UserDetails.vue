<script setup>
import {useProvided} from "../../../hooks/useProvided.js";
import {defineProps} from "vue";
const provided = useProvided()
console.log(provided)
const {toggleStepState} = provided
console.log(toggleStepState)
defineProps({
  step: Object,
})

const onSaveButtonClick = () => {
  // todo зробити щось з цим ноликом
  // toggleStepState(1, 'isPreviewState')
}
</script>

<template>
  <div>
    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-6">
      <div class="flex-1">
        <label for="from" class="block text-base font-medium text-black">Ваше Имя</label>
        <div class="flex items-center mt-1 space-x-2">
          <input id="from" type="text" placeholder="Как Вас зовут?"
                 class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
        </div>
      </div>
      <div class="flex-1">
        <label for="from" class="block text-base font-medium text-black">Ваш email</label>
        <div class="flex items-center mt-1 space-x-2">
          <input id="from" type="text" placeholder="Ваш адрес эл. почты"
                 class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
        </div>
      </div>
    </div>
    <div class="flex space-x-6 mb-4 sm:mb-6">
      <div class="flex-1">
        <label for="from" class="block text-base font-medium text-black">Номер телефона</label>
        <div class="flex items-center mt-1 space-x-2">
          <input id="from" type="text" placeholder="+38 093 288 82 88"
                 class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
        </div>
      </div>
    </div>

    <div class="flex justify-end mt-6">
      <button class="w-full sm:w-auto px-4 bg-cyan-700 text-white text-xl py-3 rounded-md">Заказать поездку</button>
    </div>
  </div>
</template>