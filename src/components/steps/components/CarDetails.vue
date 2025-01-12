<script setup>
import {useProvided} from "../../../hooks/useProvided.js";
import {defineProps} from "vue";
const {toggleStepState} = useProvided()

defineProps({
  step: Object,
})

const onSaveButtonClick = () => {
  // todo зробити щось з цим ноликом
  toggleStepState('carDetails', 'isPreviewState')
  toggleStepState('userDetails', 'isEditState')
}
</script>

<template>
  <div>
    <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 pt-4">
      <div class="w-full sm:w-1/4 mb-4 sm:mb-0">
        <img class="w-40 sm:w-60"
             src="https://ttstaxi.com/wp-content/uploads/2018/02/Opel-Zafira-Family-7-480x223.png.pagespeed.ce.Rsb8Jrk2yM.png"
             alt="">
        <p class="mt-4 text-gray-500">Mercedes E Class, BMW 5 Series, Cadillac XTS or similar.</p>
      </div>

      <div class="w-full sm:w-2/4">
        <h2 class="text-4xl sm:text-2xl tracking-wide font-bold">Стандарт</h2>
        <p class="mt-2">Максимум 6 человек</p>
        <div class="flex flex-nowrap whitespace-nowrap sm:flex-wrap overflow-y-hidden mt-4 pb-2 sm:pb-0">
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">30 минут в пути</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатная отмена</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Консьерж сервис</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатное ожидание</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Встреча с табличкой</div>
        </div>
      </div>
      <div class="w-full sm:w-1/4">
        <p class="font-bold text-4xl text-right mb-4">150 €</p>
        <p class="text-right">Бесплатная отмена</p>
        <p class="text-right">Все налоги включены</p>
        <button @click="onSaveButtonClick" class="mt-4 bg-cyan-700 text-white text-xl py-3 rounded-md w-full">Выбрать</button>
      </div>
    </div>
    <hr class="my-4">
    <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 pt-4">
      <div class="w-full sm:w-1/4 mb-4 sm:mb-0">
        <img class="w-40 sm:w-60"
             src="https://ttstaxi.com/wp-content/uploads/2018/02/Opel-Zafira-Family-7-480x223.png.pagespeed.ce.Rsb8Jrk2yM.png"
             alt="">
        <p class="mt-4 text-gray-500">Mercedes E Class, BMW 5 Series, Cadillac XTS or similar.</p>
      </div>

      <div class="w-full sm:w-2/4">
        <h2 class="text-4xl sm:text-2xl tracking-wide font-bold">Стандарт</h2>
        <p class="mt-2">Максимум 6 человек</p>
        <div class="flex flex-nowrap whitespace-nowrap sm:flex-wrap overflow-y-hidden mt-4 pb-2 sm:pb-0">
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">30 минут в пути</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатная отмена</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Консьерж сервис</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатное ожидание</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Встреча с табличкой</div>
        </div>
      </div>
      <div class="w-full sm:w-1/4">
        <p class="font-bold text-4xl text-right mb-4">150 €</p>
        <p class="text-right">Бесплатная отмена</p>
        <p class="text-right">Все налоги включены</p>
        <button @click="onSaveButtonClick" class="mt-4 bg-cyan-700 text-white text-xl py-3 rounded-md w-full">Выбрать</button>
      </div>
    </div>
    <hr class="my-4">
    <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 pt-4">
      <div class="w-full sm:w-1/4 mb-4 sm:mb-0">
        <img class="w-40 sm:w-60"
             src="https://ttstaxi.com/wp-content/uploads/2018/02/Opel-Zafira-Family-7-480x223.png.pagespeed.ce.Rsb8Jrk2yM.png"
             alt="">
        <p class="mt-4 text-gray-500">Mercedes E Class, BMW 5 Series, Cadillac XTS or similar.</p>
      </div>

      <div class="w-full sm:w-2/4">
        <h2 class="text-4xl sm:text-2xl tracking-wide font-bold">Стандарт</h2>
        <p class="mt-2">Максимум 6 человек</p>
        <div class="flex flex-nowrap whitespace-nowrap sm:flex-wrap overflow-y-hidden mt-4 pb-2 sm:pb-0">
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">30 минут в пути</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатная отмена</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Консьерж сервис</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатное ожидание</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Встреча с табличкой</div>
        </div>
      </div>
      <div class="w-full sm:w-1/4">
        <p class="font-bold text-4xl text-right mb-4">150 €</p>
        <p class="text-right">Бесплатная отмена</p>
        <p class="text-right">Все налоги включены</p>
        <button @click="onSaveButtonClick" class="mt-4 bg-cyan-700 text-white text-xl py-3 rounded-md w-full">Выбрать</button>
      </div>
    </div>
  </div>
</template>