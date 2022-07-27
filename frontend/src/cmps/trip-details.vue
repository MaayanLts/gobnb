<template>
  <section v-if="stay" class="trip-details-holder">
    <div class="trip-details">
      <span class="price-for-night">{{ priceForNight }}</span><span >night</span>
      <div class="data-change-area">
        <div class="dates-labels"><span>Check in</span><span>Check out</span></div>
        <el-date-picker class="el-date-picker-style" type="daterange"
        v-model="trip.dates"
        start-placeholder="Start date"
        end-placeholder="End date" />
        <div>
          <span>GUESTS</span>
          <span>1 guest</span>
        </div>
      </div>
      <div class="action-reserve btn-hover clickable" @click.stop="reserve">
        <span>Reserve</span>
      </div>
    </div>

    <div class="trip-message">You won't be charget yet</div>

    <div class="trip-footer">
      <div class="trip-total-price"><span>{{ tripPriceDescription }}</span><span>{{ tripPrice }}</span></div>
      <div class="trip-fee"><span>Service fee</span><span>{{ serviceFee }}</span></div>
      <span>Total</span><span>{{ tripTotalPrice }}</span>
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
      stayPrice: 0,
      hurtColor: '#423f3d',
    }
  },
  methods: {
    getTrip(){
      this.trip = this.$store.getters.getTrip
    },
    daysCount(){
      return 5
    },
    daysRangePrice(){
      return this.stayPrice * this.daysCount()
    },
    tripFee(){
     // const fee = 100//Math.round(this.dateRangePrice() * 0.17)
      return 100
    },
    reserve(){

    }
  },
  computed: {
    priceForNight(){
      return `$${this.stayPrice}`
    },
    tripPrice(){
      const days = this.daysRangePrice()
      return `$${ days }`
    },
    tripPriceDescription(){
      const totalPrice = this.stayPrice  //this.datesRange()
      return `$${ totalPrice } nights`
    },
    serviceFee(){
      return `$${ this.tripFee }`
    },
    tripTotalPrice(){
      return `$${ this.tripPrice + this.tripFee }`
    }
  },
  created() {
    this.getTrip()
    this.stayPrice = this.stay.price
  },
}
</script>
