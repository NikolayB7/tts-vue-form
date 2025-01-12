<script setup>

import {provide, ref, computed, watch, onMounted, reactive} from "vue";

import StepConfigurations from "/public/steps-components.json"
import OrderStep from "/public/order-step.json"

import StepsWrapper from "./components/steps/StepsWrapper.vue";
import FormStep from "./components/FormStep.vue";
import OrderSidebar from "./components/OrderSidebar.vue";

const formValues = ref({})
const updateValue = (field, value) => {
    formValues.value[field] = value;
};

// todo maybe move to file with steps configurations
const steps = ref(
    StepConfigurations.map((step, index) => ({
        ...step,
        isEditState: index === 0,
        isPreviewState: false,
    })
))


const toggleStepState = (key, stateVariable) => {
  steps.value.map((step) => {
    if (step.key === key) {
      step.isEditState = stateVariable === 'isEditState';
      step.isPreviewState = stateVariable === 'isPreviewState';
    }
  });
};

provide('provided', {
  toggleStepState
});

const allFormStep = ref(
    OrderStep.map((step) => ({
        ...step,
        visible: false,
        edit: false,
    }))
);
const stepsSidebar = computed(() => {
    return allFormStep.value.map((step, index) => ({
        title: step.title,
        visible: step.visible,
        edit: step.edit,
    }));
});

const renderEditInfo = computed(() => {
    return allFormStep.value.map((step) => {
        const stepInfo = {};
        step.fields.forEach((field) => {
            stepInfo[field.field_name_edit_text] = formValues.value[field.field_name];
        });
        return stepInfo;
    });
});

const enteredData = (stepField)=>{
    // formValues.value[field]
    console.log(stepField)
}

// const checkEnteredValues = (fields, formValues) => {
//     return fields.map(field => ({
//         ...field,
//         isFilled: formValues.value[field.field_name] !== null && formValues.value[field.field_name] !== ''
//     }));
// };

const validateStep = (iteration) => {

    allFormStep.value = allFormStep.value.map((item, index) => {
        let visible = false;
        let edit = false;

        switch (true) {
            case index < iteration:
                visible = false;
                edit = true;
                break;
            case index === iteration:
                visible = true;
                edit = false;
                break;
        }

        return {
            ...item,
            visible,
            edit,
        };
    });
};


onMounted(()=>{
    OrderStep.forEach(step => {
        step.fields.forEach(field => {
            if (!(field.field_name in formValues.value)) {
                formValues.value[field.field_name] = field.type_block === 'checkbox' ? false : null;
            }
        });
    });
    validateStep(0);
})
provide('formValues',formValues)
provide('renderEditInfo',renderEditInfo)
provide('updateValue',updateValue)
provide('validateStep',validateStep)
</script>

<template>
<!--  <LayoutComponent/>-->
  <div class="mt-12">
    <div class="flex space-x-12">
      <div class="w-full md:w-2/3">
        <StepsWrapper :steps="steps"/>
      </div>
      <div class="hidden w-1/3 md:block">
        <OrderSidebar :steps="stepsSidebar"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
