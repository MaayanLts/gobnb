<template>


  <!-- Form -->
  <el-button text @click="dialogFormVisible = true">filter
  </el-button>

  <el-dialog v-model="dialogFormVisible" title="">
    <el-form :model="form">

      <span><i class=""></i></span>

      <div class="slider-demo-block">
        <el-slider v-model="value" range show-stops :max="maxPriceShow" />
      </div>
      <label>min price
        <el-input type="number" v-model.number="minPrice"
          placeholder="Please input" clearable />
      </label>
      <label>max Price
        <el-input type="number" v-model.number="maxPrice"
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

    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" >

import { reactive, ref } from 'vue'
export default {
  data() {
    return {
      dialogFormVisible: ref(false),
      formLabelWidth: '140px',
      form: reactive({
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      }),
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
      console.log(this.amenities);

      // this.value = ref([this.minPrice, this.maxPrice])
      // if (!this.amenities[label.target.defaultValue]) this.filterEmnt.push(label.target.defaultValue)
      // console.log('this.filterEmnt:', this.filterEmnt)
      // for (var amenitie in this.amenities) {
      //   if (amenitie === true) this.filterEmnt.push(amenitie)
      // }
      // console.log('this.filterEmnt:', this.filterEmnt)
    },
    filterBtn() {
      return this.$store.getters.getPrices.length
    },
  },
  computed: {
    maxPriceShow() {
      return +this.maxPrice
    },


  },


  created() {
  },


}







</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}

.el-select {
  width: 300px;
}

.el-input {
  width: 300px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
