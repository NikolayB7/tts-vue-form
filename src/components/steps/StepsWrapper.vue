<script setup>
import {defineProps} from 'vue'
import RideDetails from "./components/RideDetails.vue";
import RideDetailsPreview from "./components/RideDetailsPreview.vue";
import CarDetails from "./components/CarDetails.vue";
import CarDetailsPreview from "./components/CarDetailsPreview.vue";
import UserDetails from "./components/UserDetails.vue";

defineProps({
  steps: Array,
})

const stepComponents = {
  RideDetails,
  RideDetailsPreview,
  CarDetails,
  CarDetailsPreview,
  UserDetails,
}
</script>

<template>
  <div
      v-for="(step) in steps"
  >
    <div>
      <Transition name="flash">
        <div v-if="step.isEditState" class="bg-white rounded-3xl w-full px-6 py-4 mb-4 sm:mb-6">
          <component :is="stepComponents[step.formComponent]" :step="step"/>
        </div>
      </Transition>
      <Transition name="flash">
        <div v-if="step.isPreviewState" class="bg-white rounded-3xl w-full px-6 py-4 mb-4 sm:mb-6">
          <component v-if="step.isPreviewState" :is="stepComponents[step.previewComponent]" :step="step"/>
        </div>
      </Transition>
    </div>
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
