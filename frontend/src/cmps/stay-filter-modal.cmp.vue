<template>

  <Btn @click="open1 = true">filter</Btn>
  <Modal v-model="open1" ok-text="filter" ok-type="default"
    @hide="buildFilterObj">
    <template #title>
      <span><i class=""></i></span>

      <BarChart width="80%" :chartData="labelsData" />
      <div class="slider-demo-block">
        <el-slider v-model="value" range show-stops :max="maxPriceShow" />
      </div>
      <label>min price
        <el-input type="number" @input="callback" v-model.number="minPrice"
          placeholder="Please input" clearable />
      </label>
      <label>max Price
        <el-input type="number" @input="callback" v-model.number="maxPrice"
          placeholder="Please input" clearable />
      </label>
      <div>
        <el-checkbox @click="callback" v-model="amenities.TV" label="TV"
          size="large" />
        <el-checkbox @click="callback" v-model="amenities.Internet"
          label="Internet" size="large" />
        <el-checkbox @click="callback" v-model="amenities.Wifi" label="Wifi"
          size="large" />
        <el-checkbox @click="callback" v-model="amenities.AirConditioning"
          label="Air Conditioning" size="large" />
        <el-checkbox @click="callback" v-model="amenities.WheelchairAccessible"
          label="Wheelchair Accessible" size="large" />
        <el-checkbox @click="callback" v-model="amenities.Pool" label="Pool"
          size="large" />
        <el-checkbox @click="callback" v-model="amenities.Kitchen"
          label="Kitchen" size="large" />
      </div>
      <button @click="open1 = false">f</button>
    </template>
  </Modal>

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

      open1: ref(false),


      minPrice: ref(14),
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
            backgroundColor: ['#423f3d'],
            // #123E6B
          },
        ],
      },
    }
  },
  props: {
  },

  methods: {
    buildFilterObj() {
      const filterBy = {
        byPrice: { minPrice: this.minPrice, maxPrice: this.maxPrice }
      }

      this.$store.dispatch({
        type: 'setFilterBy',
        filterBy: filterBy,
      })
    },
    callback() {
      this.value = ref([this.minPrice, this.maxPrice])
      console.log('msg:',)
      console.log('this.$store.getters.getPrices.length:', this.$store.getters.getStays)

    },
    filterBtn() {
      return this.$store.getters.getPrices.length
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
        labels.push("");
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

  },
})
</script>
