<script setup>
import {useProvided} from "../../../hooks/useProvided.js";
import {defineProps, ref} from "vue";
import HtmlSelect from "../../fields/HtmlSelect.vue";
import HtmlTextarea from "../../fields/HtmlTextarea.vue";
import HtmlCheckbox from "../../fields/HtmlCheckbox.vue";
import TypeaheadCitySelect from "../../fields/TypeaheadCitySelect.vue";
import HtmlDatetime from "../../fields/HtmlDatetime.vue";

defineProps({
  step: Object,
})

const {toggleStepState, saveFormValues, getFormValues} = useProvided()

const formDataRef = ref({
  departure: getFormValues().departure, // todo from params
  destination: getFormValues().destination, //todo from params
  dateTime: getFormValues().dateTime,
  isReturnOption: getFormValues().isReturnOption,
  returnDateTime: getFormValues().returnDateTime,
  comment: getFormValues().comment,
  countPassengers: getFormValues().countPassengers,
  countChildSeats: getFormValues().countChildSeats,
})

const onSaveButtonClick = () => {
  // todo validation
  saveFormValues(formDataRef.value)
  toggleStepState('rideDetails', 'isPreviewState')
  toggleStepState('carDetails', 'isEditState')
}

const onTypeaheadCitySelectChange = (fieldName, value) => {
  formDataRef.value[fieldName] = value.label
  formDataRef.value[`${fieldName}Id`] = value.value
}
</script>

<template>
  <div>
    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-6">
      <TypeaheadCitySelect
          label="Откуда"
          fieldName="departure"
          placeholder="Город, аэропорт, ..."
          v-model="formDataRef.departure"
      />
      <TypeaheadCitySelect
          label="Куда"
          fieldName="destination"
          placeholder="Город, аэропорт, ..."
          v-model="formDataRef.destination"
      />
    </div>
    <div class="flex space-x-6 mb-4 sm:mb-6">
      <HtmlDatetime
          label="Дата и время"
          fieldName="dateTime"
          v-model="formDataRef.dateTime"
      />
    </div>
    <div class="flex">
      <HtmlCheckbox
          label="Включить обратный трансфер"
          fieldName="isReturnOption"
          v-model="formDataRef.isReturnOption"
      />
    </div>
    <!-- для перемикання додаємо клас hidden -->
    <Transition name="slide">
    <div v-if="formDataRef.isReturnOption">

      <div class="border-l-2 pt-3 pl-3 flex space-x-6">
        <HtmlDatetime
            label=""
            fieldName="returnDateTime"
            placeholder="Выберите дату и время обратной поездки"
            v-model="formDataRef.returnDateTime"
        />
      </div>
    </div>
    </Transition>


    <HtmlTextarea
        label="Комментарий к заказу"
        fieldName="comment"
        v-model="formDataRef.comment"
        placeholder="Укажите важные детали вашей поездки: номер рейса / гостиница / особые требования"
    />
    <div class="flex space-x-6 mb-4 sm:mb-6">
      <HtmlSelect
          label="Количество людей"
          fieldName="countPassengers"
          v-model="formDataRef.countPassengers"
          :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, '10+'].map(item => ({value: item, label: item}))"
      />
    </div>
    <div class="flex space-x-6 mb-4 sm:mb-6">
      <HtmlSelect
          label="Количество людей"
          fieldName="countPassengers"
          v-model="formDataRef.countChildSeats"
          :options="['Детские кресла не нужны', 1, 2, 3, 4].map((item, key) => ({value: key, label: item}))"
      />
    </div>

    <div class="flex justify-end mt-6">
      <button class="w-full sm:w-auto px-4 bg-cyan-700 text-white text-xl py-3 rounded-md"
              @click="onSaveButtonClick">
        Сохранить
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>