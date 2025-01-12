<script setup>
import {useProvided} from "../../../hooks/useProvided.js";
//
const {toggleStepState, getFormValues} = useProvided()
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
      <b>{{ `${getFormValues().departure} – ${getFormValues().destination}` }}</b>
      <p class="mt-2"><span class="text-slate-600">Дата / время:</span> {{ getFormValues().dateTime }}</p>
      <p class="mt-2">
        <span class="text-slate-600">Обратно: </span> {{ getFormValues().returnDateTime }}</p>
      <p v-if="getFormValues().comment" class="mt-2">
        <span class="text-slate-600">Комментарий: </span> {{getFormValues().comment}}
      </p>
      <p class="mt-2"><span class="text-slate-600">Люди: </span> {{getFormValues().countPassengers}}</p>
      <p class="mt-2"><span class="text-slate-600">Детские кресла: </span> {{getFormValues().countChildSeats === 0 ? 'Не нужны' : getFormValues().countChildSeats}}</p>
    </div>
  </div>
</template>