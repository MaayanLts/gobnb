<template>
  <section v-if="stay" class="trip-details-holder brd-red">
    <div class="trip-details">
      <div>{{ stayPrice }}</div>
      <div class="data-change-area">
        <el-date-picker class="brd-red" v-model="dates" type="daterange" start-placeholder="Check iv" end-placeholder="Check out" />
        <div>
          <span>GUESTS</span>
          <span>1 guest</span>
        </div>
      </div>
      <div class="trip-btn">${{stay.price}} </div>
    </div>
    
    <div class="trip-message brd-green">You won't be charget yet</div>
    <div class="trip-footer brd-green">{{stay.price}}
    <!-- <div></div> -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    stay: {
      type: Object,
    }
  },
  data() {
    return {
      trip: null,
      hurtColor: '#423f3d',
      dates: []
    }
  },
  methods: {
  },
  computed: {
    stayPrice(){
      return `$${this.stay.price}`
    }
  },
  created() {
    this.trip = this.$store.getters.getTrip
    if(this.trip){
      this.dates = this.trip.dates
    }
  },
}
</script>
