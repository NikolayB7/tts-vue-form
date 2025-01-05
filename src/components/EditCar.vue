<script setup>
import {inject, reactive, ref} from "vue";

const props = defineProps({
  car: Object,
  field_name:String,
  duration: String,
  selected:Boolean
})
const showSheckIcon = ref(false)
const getValue = inject('updateValue')

const handleInput = (val) => {
  showSheckIcon.value = true
  if (getValue) {
    getValue(props.field_name, val);
  }
  setTimeout(()=>{
    console.log('LOAD')
    showSheckIcon.value = false
  },1300)
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

        <span v-if="!showSheckIcon">
        Выбрать
          </span>
        <span v-else>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 200 200"><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
        </span>

       </button>
    </div>
  </div>
</template>

<style scoped>

</style>