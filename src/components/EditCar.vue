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
const switchingStep = inject('switchingStep')
const handleInput = (val) => {
    if (getValue) {
        getValue(props.field_name, val);
        // @TODO-NB
        switchingStep(props.iteration + 1)
    }
};
</script>

<template>
    <div
        class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 pt-4" v-if="car"
    >
        <div class="basis-52">
            <img
                class="w-40 sm:w-60"
                :src="`img/car/type_id_${car.id}.png`"
                alt="">
            <div>{{car.description}}</div>
        </div>
        <div class="basis-52">
            <div class="flex justify-between">
                <h3 class="text-4xl sm:text-2xl tracking-wide font-bold">{{car.name}}</h3>
                <div class="font-bold text-3xl mb-2 sm:mb-0 sm:text-4xl sm:text-right" v-if="selected">{{car.price}}</div>
            </div>
            <div class="flex flex-nowrap whitespace-nowrap sm:flex-wrap overflow-y-hidden mt-4 pb-2 sm:pb-0">
                <el-tooltip
                    v-if="duration"
                    effect="dark"
                    :content="`Длительность поездки ${duration}`"
                    placement="bottom"
                >
                    <el-button class="custom-tooltip">
                        Длительность поездки{{duration }}
                    </el-button>
                </el-tooltip>
                <el-tooltip
                    v-if="duration"
                    effect="dark"
                    :content="`Длительность поездки ${duration}`"
                    placement="bottom"
                >
                    <el-button class="custom-tooltip">
                        Бесплатная отмена
                    </el-button>
                </el-tooltip>
                <el-tooltip
                    v-if="duration"
                    effect="dark"
                    :content="`Длительность поездки ${duration}`"
                    placement="bottom"
                >
                    <el-button class="custom-tooltip">
                        Все налоги влючены
                    </el-button>
                </el-tooltip>
            </div>
        </div>
        <div v-if="!selected" class="basis-52">
            <div class="font-bold text-3xl mb-2 sm:mb-0 sm:text-4xl sm:text-right">{{car.price}}</div>

            <button
                class="w-full sm:w-auto px-4 bg-cyan-700 text-white text-xl py-3 rounded-md"
                @click="handleInput(car)"
            >
                Выбрать
            </button>
        </div>
    </div>
</template>

<style scoped>

.custom-tooltip{
    @apply bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm;
}
</style>