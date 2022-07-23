<template>

  <Btn @click="open1 = true">filter</Btn>
  <Modal v-model="open1">
    <template #title>
      <span><i class=""></i></span>

      <BarChart :chartData="labelsData" />
      <div class="slider-demo-block">
        <el-slider v-model="value" range show-stops :max="maxPriceShow" />
      </div>
      <el-input type="number" @input="buildFilterObj" v-model.number="minPrice"
        placeholder="Please input" clearable />
      <el-input type="number" @input="buildFilterObj" v-model.number="maxPrice"
        placeholder="Please input" clearable />
      <div>
        <el-checkbox @click="buildFilterObj" v-model="amenities.TV" label="TV"
          size="large" />
        <el-checkbox @click="buildFilterObj" v-model="amenities.Internet"
          label="Internet" size="large" />
        <el-checkbox @click="buildFilterObj" v-model="amenities.Wifi"
          label="Wifi" size="large" />
        <el-checkbox @click="buildFilterObj" v-model="amenities.AirConditioning"
          label="Air Conditioning" size="large" />
        <el-checkbox @click="buildFilterObj"
          v-model="amenities.WheelchairAccessible" label="Wheelchair Accessible"
          size="large" />
        <el-checkbox @click="buildFilterObj" v-model="amenities.Pool"
          label="Pool" size="large" />
        <el-checkbox @click="buildFilterObj" v-model="amenities.Kitchen"
          label="Kitchen" size="large" />
      </div>
    </template>
  </Modal>

</template>
<script >

import { Modal, Btn } from 'uiv';


import { ref } from 'vue'
import { defineComponent } from 'vue';
import { BarChart } from 'vue-chart-3';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default defineComponent({
  components: { DoughnutChart, BarChart },
  data() {
    return {

      open1: ref(false),
      open2: ref(false),

      minPrice: ref(),
      maxPrice: ref(1000),
      value: ref([0, 0]),
      amenities: {
        'TV': false,
        'Internet': false,
        'Wifi': false,
        'AirConditioning': false,
        'WheelchairAccessible': false,
        'Pool': false,
        'Kitchen': false,
      },
      chartData: {
        labels: ['this.minPrice', 'this.maxPrice'],
        datasets: [
          {
            data: [0, 1600],
            backgroundColor: ['#77CEFF', '#0079AF'],
          },
        ],
      },
    }
  },
  props: {
  },

  methods: {
    buildFilterObj() {
      this.value = ref([this.minPrice, this.maxPrice])
    },

  },
  computed: {
    maxPriceShow() {
      return +this.maxPrice
    },
    labelsData() {
      let labels = [];
      let data = [];
      const dataset = this.$store.getters.getPrices;
      for (var price in dataset)
      {
        labels.push(price);
        data.push(dataset[price]);
      }
      return {
        labels,
        datasets: [
          {
            data,
            backgroundColor: [
              "#77CEFF",
            ],
          },
        ],
      };
    },
  },
  created() {
    // let labels = [];
    // let data = [];
    // const dataset = this.$store.getters.getPrices;
    // for (var price in dataset)
    // {
    //   console.log('price:', price)
    //   labels.push(price);
    //   labels.splice(this.minPrice, this.maxPrice)
    //   data.push(dataset[price]);
    //   data.splice(this.minPrice, this.maxPrice)
    // }
  },
})
</script>
