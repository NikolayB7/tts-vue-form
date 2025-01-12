<script setup>
import {useProvided} from "../../../hooks/useProvided.js";
//
const {toggleStepState} = useProvided()
const onEditButtonClick = () => {
  toggleStepState(1, 'isEditState')
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <h2 class="text-2xl">Авто</h2>
      <a @click="onEditButtonClick" href="#" class="text-gray-400">Изменить</a>
    </div>
    <hr class="my-2">
    <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 pt-4">
      <div class="mb-4 sm:mb-0">
        <img class="w-40 sm:w-60"
             src="https://ttstaxi.com/wp-content/uploads/2018/02/Opel-Zafira-Family-7-480x223.png.pagespeed.ce.Rsb8Jrk2yM.png"
             alt="">
        <p class="mt-4 text-gray-500">Mercedes E Class, BMW 5 Series, Cadillac XTS or similar.</p>
      </div>
      <div>
        <div class="flex flex-col-reverse sm:flex-row sm:justify-between">
          <div>
            <h2 class="text-4xl sm:text-2xl tracking-wide font-bold">Стандарт</h2>
            <p class="mt-2">Максимум 6 человек</p>
          </div>
          <div>
            <p class="font-bold text-3xl mb-2 sm:mb-0 sm:text-4xl sm:text-right">150 € <span
                class="text-cyan-600">*</span></p>
          </div>
        </div>
        <div class="flex flex-nowrap whitespace-nowrap sm:flex-wrap overflow-y-hidden mt-4 pb-2 sm:pb-0">
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">30 минут в пути</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатная отмена</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Консьерж сервис</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатное ожидание</div>
          <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Встреча с табличкой</div>
        </div>
        <p class="text-cyan-600 text-lg">* Стоимость включает поездку в оба направления.</p>
      </div>
    </div>
  </div>
</template>