<script setup>

import {provide, ref, computed, watch, onMounted, reactive} from "vue";

import OrderStep from "/public/order-step.json"

import FormStep from "./components/FormStep.vue";
import OrderSidebar from "./components/OrderSidebar.vue";
import LayoutComponent from "./components/LayoutComponent.vue";

const formValues = ref({})
const updateValue = (field, value) => {
    formValues.value[field] = value;
};

// visible - the field is open and currently being edited
// edit - short version for editing

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
  <LayoutComponent/>
    <header class="bg-white shadow-sm py-5 mb-10">
        <div class="container mx-auto">
            Logo
        </div>
    </header>
    <div class="container mx-auto">
        <div class="flex">
            <div
                class="basis-1/2 mr-5"
            >
                <div
                    v-for="(step, index) in allFormStep"
                    :key="index"
                >
                    <FormStep
                        v-if="step.visible || step.edit"
                        :iteration="index"
                        :step="step"
                        :formValues="formValues"
                    />
                </div>
            </div>
            <div class="basis-1/3">
                <OrderSidebar :steps="stepsSidebar"/>
            </div>
        </div>
    </div>


</template>

<style scoped>

</style>
