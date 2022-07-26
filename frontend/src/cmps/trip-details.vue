<template>
  <section v-if="stay" class="trip-details-holder brd-red">
    <div class="trip-details">
      <div>{{ stayPrice }}</div>
      <div class="data-change-area">
        <el-date-picker class="brd-red" v-model="trip.dates" type="daterange" start-placeholder="Check iv" end-placeholder="Check out" />
        <div>
          <span>GUESTS</span>
          <span>1 guest</span>
        </div>
      </div>
      <div class="trip-btn">${{ stayPrice }} </div>
    </div>
    
    <div class="trip-message brd-green">You won't be charget yet</div>
    <div class="trip-footer brd-green">{{ stayPrice }}
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
      //dates: []
    }
  },
  methods: {
    getTrip(){
      this.trip = this.$store.dispatch({type: 'getTrip' })
    }
  },
  computed: {
    stayPrice(){
      return '100'//`$${this.trip.price}`
    }
  },
  created() {
    this.getTrip()
    //this.$store.getters.getTrip
    //if(!this.trip)
     // this.trip = this.$store.getters.getEmptyTrip

   // if(this.trip){
    //  this.trip.dates = this.trip.dates
   // }
  },
}
</script>
