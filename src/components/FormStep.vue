<script setup>
import { defineProps, inject } from 'vue'
import Select from './fields/Select.vue'
import Input from './fields/Input.vue'
import Date from './fields/Date.vue'
import Phone from './fields/Phone.vue'
import ChoiseCar from './ChoiseCar.vue'
import Checkbox from './fields/Checkbox.vue'
import EditableStep from './EditableStep.vue'

defineProps({
    step: Object,
    iteration: Number,
    formValues:Object
})

const fieldComponents = {
    select: Select,
    phone: Phone,
    date: Date,
    input: Input,
    checkbox: Checkbox,
    text: Input,
    car: ChoiseCar
}

const validateStep = inject('validateStep')
</script>

<template>
    <div class="bg-white rounded-xl shadow-2xl p-3 mb-5">
        <h3 class="font-bold text-xl mb-2">{{ step.title }}</h3>
        <Transition name="flash">
            <div v-if="step.visible">
                <div class="mb-3" v-for="(field, fieldIndex) in step.fields" :key="fieldIndex" v-auto-animate>
                    <component
                        :is="fieldComponents[field.type_block]"
                        :label="field.label"
                        :field_name="field.field_name"
                        :type="field.type"
                        :iteration="iteration"
                        :placeholder="field.placeholder"
                        v-if="!(field.field_name === 'date2' && !formValues.reverse)"
                    />
                </div>
                <div class="flex justify-end">
                    <button
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        @click="validateStep(iteration + 1)"
                    >
                        {{ step.btn_next_step_text }}
                    </button>
                </div>
            </div>
        </Transition>
        <EditableStep v-if="step.edit" :iteration="iteration" />
    </div>
</template>

<style scoped>
.flash-enter-active, .flash-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.flash-enter, .flash-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>
