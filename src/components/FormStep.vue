<script setup>
import {defineProps, inject, onMounted, ref} from 'vue'
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
const switchingStep = inject('switchingStep')

</script>

<template>
    <div
        class="bg-white rounded-3xl w-full px-6 py-4 mb-4 sm:mb-6">
        <h3 class="font-bold text-xl mb-2">{{ step.title }}</h3>
        <Transition name="accordion" mode="out-in">
            <div :key="step.visible ? 'visible' : 'edit'" >
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
                            @click="switchingStep(iteration + 1)"
                        >
                            {{ step.btn_next_step_text }}
                        </button>
                    </div>
                </div>

                <EditableStep v-if="step.edit" :iteration="iteration" />
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.accordion-enter-active {
    max-height: 2000px;
    transition: all 0.7s ease;
}
.accordion-enter-from, .accordion-leave-to {
    max-height: 0;
    overflow: hidden;
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
