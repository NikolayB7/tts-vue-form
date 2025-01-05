<script setup>

import {defineProps, inject, onMounted, ref} from "vue";
import axios from "axios";
import EditCar from "./EditCar.vue";
const props = defineProps({
    label: String,
    field_name:String,
    placeholder:String,
    type:String,
    iteration:Number

});
const carList = ref([])
const formValues = inject('formValues')

onMounted(async()=>{

    try {

        if (!formValues || !formValues.value) {
            console.error("formValues is not defined or empty");
            return;
        }

        console.log("formValues:", formValues.value);

        const response = await axios.get(import.meta.env.VITE_TRANSFERS_API,{
            params: {
                // city_1: formValues.value["city_1"],
                // city_2: formValues.value["city_2"],
                // date: formValues.value["date"]
                city_1: "41",
                city_2: "37",
                date: "17.01.2025"
            }
        });
        console.log(response.data.transfer)
        carList.value = response.data.transfer

    } catch (error) {
        console.error('Error fetching VITE_TRANSFERS_API:', error);
    }

})

</script>

<template>
    <div
        v-for="(car,index) in carList.cars"
        :key="car.id"
    >
        <EditCar
            :car="car"
            :field_name="field_name"
            :duration="carList.duration"
        />
    </div>
</template>

<style scoped>

</style>