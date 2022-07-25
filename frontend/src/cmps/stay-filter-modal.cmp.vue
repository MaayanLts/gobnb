<template>

  <Btn @click="open1 = true">Filter</Btn>
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
      filterEmnt: [],
      open1: ref(false),


      minPrice: 14,
      maxPrice: 1600,
      value: ref([14, 1600]),
      amenities: {
        TV: false,
        Internet: false,
        Wifi: false,
        AirConditioning: false,
        WheelchairAccessible: false,
        Pool: false,
        Kitchen: false,
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
    callback(label) {
      console.log('label:', label.target.defaultValue)
      this.value = ref([this.minPrice, this.maxPrice])
      const filterEmnt = []
      console.log('this.amenities[label.target.defaultValue]:', this.amenities[label.target.defaultValue])
      if (!this.amenities[label.target.defaultValue]) filterEmnt.push(label.target.defaultValue)
      // for (var amenitie in this.amenities)
      // {
      //   if (amenitie === true) filterEmnt.push(amenitie)
      // }
      console.log('filterEmnt:', filterEmnt)

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
        labels.push(price)

        data.push(dataset[price]);
      }
      return {
        labels,
        datasets: [
          {
            data,
            backgroundColor: [
              "gray",
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
