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
            <div v-if="step.visible" class="form-grid">
                <div :class=" field.placement ? `form-grid-el_half`:`form-grid-el`" v-for="(field, fieldIndex) in step.fields" :key="fieldIndex">
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
                <div class="flex justify-end w-full">
                    <button
                        class="w-full sm:w-auto px-4 bg-cyan-700 text-white text-xl py-3 rounded-md"
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

[type="text"]{
    border:none;
    padding: 0;
}

.form-grid{
    @apply flex flex-wrap justify-between;
}
.form-grid-el,.form-grid-el_half:not(:last-child){
    @apply mb-2
}
.form-grid-el{
   @apply w-full shrink-0 grow-0;
}
.form-grid-el_half{
    width: 49%;
    @apply shrink-0 grow-0;
}
</style>
