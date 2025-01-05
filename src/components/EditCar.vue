<script setup>
import {inject, reactive, ref} from "vue";

const props = defineProps({
  car: Object,
  field_name:String,
  duration: String
})

const selectedCar = reactive({})
const getValue = inject('updateValue')

const handleInput = (val) => {
  if (getValue) {
    getValue(props.field_name, val);
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
      <h3>{{car.name}}</h3>
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
    <div>
      <div>{{car.price}}</div>
      <div>Бесплатная отмена</div>
      <div>Все налоги влючены</div>
      <button
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          @click="handleInput(car)"
      >
        Выбрать
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>