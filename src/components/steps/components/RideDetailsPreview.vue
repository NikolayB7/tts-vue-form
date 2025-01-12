<script setup>
import {useProvided} from "../../../hooks/useProvided.js";
//
const {toggleStepState} = useProvided()
const onEditButtonClick = () => {
  toggleStepState('rideDetails', 'isEditState')
}
</script>
<template>
  <div>
    <div class="flex justify-between items-center">
      <h2 class="text-2xl">Поездка</h2>
      <a @click="onEditButtonClick" href="#" class="text-gray-400">Изменить</a>
    </div>
    <hr class="my-2">
    <div class="text-xl">
      <b>Венеция – Верона</b>
      <p class="mt-2"><span class="text-slate-600">Дата / время:</span> 12.12.2021 22:30</p>
      <p class="mt-2"><span class="text-slate-600">Обратно: </span> 12.12.2021 22:30</p>
      <p class="mt-2"><span class="text-slate-600">Комментарий: </span> Alverà, 70, Cortina dʼAmpezzo</p>
      <p class="mt-2"><span class="text-slate-600">Люди: </span> 2</p>
      <p class="mt-2"><span class="text-slate-600">Детские кресла: </span> Не нужны</p>
    </div>
  </div>
</template>