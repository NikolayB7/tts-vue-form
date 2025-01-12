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
  toggleStepState('rideDetails', 'isPreviewState')
  toggleStepState('carDetails', 'isEditState')
}
</script>

<template>
  <div>
    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-6">
      <div class="flex-1">
        <label for="from" class="block text-base font-medium text-black">Откуда</label>
        <div class="flex items-center mt-1 space-x-2">
          <input id="from" type="text" placeholder="Город, аэропорт, ..."
                 class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
        </div>
      </div>
      <div class="flex-1">
        <label for="from" class="block text-base font-medium text-black">Куда</label>
        <div class="flex items-center mt-1 space-x-2">
          <input id="from" type="text" placeholder="Город, аэропорт, ..."
                 class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
        </div>
      </div>
    </div>
    <div class="flex space-x-6 mb-4 sm:mb-6">
      <div class="flex-1">
        <label for="from" class="block text-base font-medium text-black">Дата и время</label>
        <div class="flex items-center mt-1 space-x-2">
          <input id="from" type="text" placeholder="Выберите дату и время поездки"
                 class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="flex-1 flex gap-3 items-center ">
        <input checked type="checkbox">
        <label for="from" class="block text-base font-medium text-black">Включить обратный трансфер</label>
      </div>
    </div>
    <!-- для перемикання додаємо клас hidden -->
    <div class="border-l-2 pt-3 pl-3 flex space-x-6">
      <div class="flex-1">
        <label for="from" class="block text-base font-medium text-black">Дата обратного трансфера</label>
        <div class="flex items-center mt-1 space-x-2">
          <input id="from" type="text" placeholder="Выберите дату и время обратной поездки"
                 class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
        </div>
      </div>
    </div>

    <div class="flex-1 mt-4 sm:mt-6 mb-4 sm:mb-6">
      <label for="from" class="block text-base font-medium text-black">Комментарий к заказу</label>
      <div class="flex items-center mt-1 space-x-2">
            <textarea id="from"
                      placeholder="Укажите важные детали вашей поездки: номер рейса / гостиница / особые требования"
                      class="border-gray-300 rounded-xl h-24 w-full text-black placeholder-gray-500"></textarea>
      </div>
    </div>

    <div class="flex space-x-6 mb-4 sm:mb-6">
      <div class="flex-1">
        <label for="from" class="block text-base font-medium text-black">Количество людей</label>
        <div class="flex items-center mt-1 space-x-2">
          <select name="" id="" class="border-gray-300 rounded-xl">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10+">10+</option>
          </select>
        </div>
      </div>
    </div>
    <div class="flex space-x-6 mb-4 sm:mb-6">
      <div class="flex-1">
        <label for="from" class="block text-base font-medium text-black">Количество детских кресел</label>
        <div class="flex items-center mt-1 space-x-2">
          <select name="" id="" class="border-gray-300 rounded-xl">
            <option value="0">Детские кресла не нужны</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </div>

    <div class="flex justify-end mt-6">
      <button class="w-full sm:w-auto px-4 bg-cyan-700 text-white text-xl py-3 rounded-md"
              @click="onSaveButtonClick">
        Сохранить
      </button>
    </div>
  </div>
</template>