<script setup>
import { defineProps, inject, onMounted, ref } from 'vue'
import axios from 'axios'
import EditCar from './EditCar.vue'
const props = defineProps({
    label: String,
    field_name: String,
    placeholder: String,
    type: String,
    iteration: Number
})
const carList = ref([])
const carListInfo = ref([])
const formValues = inject('formValues')

onMounted(async () => {

    let defaultCar = {
        "id": 12,
        "name": "VIP",
        "description": "VIP TEXT",
        "capacity": 2,
        "price": 1000
    }

    try {
        // if (!formValues || !formValues.value) {
        //     console.error('formValues is not defined or empty')
        //     return
        // }

        const response = await axios.get(import.meta.env.VITE_TRANSFERS_API, {
            params: {
                city_1: formValues.value["city_1"],
                city_2: formValues.value["city_2"],
                date: formValues.value["date"]
            }
        })
        if (response.data.success){
            carListInfo.value=response.data || ''
            carList.value = [
                ...response.data.transfer.cars,
                defaultCar
            ]
        }else{
            carList.value = [defaultCar]
        }

    } catch (error) {
        console.error('Error fetching VITE_TRANSFERS_API:', error)
        carList.value = [defaultCar];
    }
})
</script>

<template>
    <div
        v-for="(car, index) in carList"
        :key="car.id + index">
        <EditCar
            :car="car"
            :field_name="field_name"
            :duration="carListInfo.transfer?.duration || ''"
            :iteration="iteration"
        />
    </div>
</template>

<style scoped></style>
