
<template>
  <el-input @input="buildFilterObj" v-model="minPrice"
    placeholder="Please input" clearable />

  <el-input @input="buildFilterObj" v-model="maxPrice"
    placeholder="Please input" clearable />

  <div>
    <el-checkbox v-model="checked1" label="Option 1" size="large" />
    <el-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>

</template>

<script >
import { ref } from 'vue'


export default {
  data() {
    return {
      minPrice: ref(''),
      maxPrice: ref(''),
      amenities: [
        "TV",
        "Cable TV",
        "Internet",
        "Wifi",
        "Air conditioning",
        "Wheelchair accessible",
        "Pool",
        "Kitchen",
        "Free parking on premises",
        "Doorman",
        "Gym",
        "Elevator",
        "Hot tub",
        "Heating",
        "Family/kid friendly",
        "Suitable for events",
        "Washer",
        "Dryer",
        "Smoke detector",
        "Carbon monoxide detector",
        "First aid kit",
        "Safety card",
        "Fire extinguisher",
        "Essentials",
        "Shampoo",
        "24-hour check-in",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Laptop friendly workspace",
        "Self check-in",
        "Building staff",
        "Private entrance",
        "Room-darkening shades",
        "Hot water",
        "Bed linens",
        "Extra pillows and blankets",
        "Ethernet connection",
        "Luggage dropoff allowed",
        "Long term stays allowed",
        "Ground floor access",
        "Wide hallway clearance",
        "Step-free access",
        "Wide doorway",
        "Flat path to front door",
        "Well-lit path to entrance",
        "Disabled parking spot",
        "Step-free access",
        "Wide doorway",
        "Wide clearance to bed",
        "Step-free access",
        "Wide doorway",
        "Step-free access",
        "Wide entryway",
        "Waterfront",
        "Beachfront"
      ],


    }
  },

  props: {

  },


  methods: {

    buildFilterObj() {

    }



  },
  computed: {

  },
  created() {

  },
}

</script>

