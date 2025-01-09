<script setup>
import {inject, reactive, ref} from "vue";

const props = defineProps({
    car: Object,
    field_name:String,
    duration: String,
    selected:Boolean,
    iteration:Number,
})

const getValue = inject('updateValue')
const validateStep = inject('validateStep')
const handleInput = (val) => {
    if (getValue) {
        getValue(props.field_name, val);
        // @TODO-NB
        validateStep(props.iteration + 1)
    }
};
</script>

<template>
    <div
        class="grid grid-cols-3" v-if="car"
    >
        <div>
            <img
                :src="`img/car/type_id_${car.id}.png`"
                alt="">
            <div>{{car.description}}</div>
        </div>
        <div>
            <div class="flex justify-between">
                <h3>{{car.name}}</h3>
                <div v-if="selected">{{car.price}}</div>
            </div>
            <el-tooltip
                v-if="duration"
                class="item"
                effect="dark"
                :content="`Длительность поездки ${duration}`"
                placement="bottom"
            >
                <el-button>
                    Длительность поездки{{duration }}
                </el-button>
            </el-tooltip>
        </div>
        <div v-if="!selected">
            <div>{{car.price}}</div>
            <div>Бесплатная отмена</div>
            <div>Все налоги влючены</div>
            <button
                class="min-w-7 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-0  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                @click="handleInput(car)"
            >
                Выбрать
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>