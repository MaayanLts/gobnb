
<template>
  <BarChart :chartData="chartData" />
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
    <el-checkbox @click="buildFilterObj" v-model="amenities.Wifi" label="Wifi"
      size="large" />
    <el-checkbox @click="buildFilterObj" v-model="amenities.AirConditioning"
      label="Air Conditioning" size="large" />
    <el-checkbox @click="buildFilterObj"
      v-model="amenities.WheelchairAccessible" label="Wheelchair Accessible"
      size="large" />
    <el-checkbox @click="buildFilterObj" v-model="amenities.Pool" label="Pool"
      size="large" />
    <el-checkbox @click="buildFilterObj" v-model="amenities.Kitchen"
      label="Kitchen" size="large" />
  </div>

</template>

<script >
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


    }



  },
  computed: {
    maxPriceShow() {
      return +this.maxPrice
    }
  },
  created() {
    this.$store.getters.getPrices
    console.log(' this.$store.getters.getPrices:', this.$store.getters.getPrices)
  },

})

</script>

