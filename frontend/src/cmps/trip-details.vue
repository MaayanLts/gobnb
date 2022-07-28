<template>
  <section v-if="stay" class="trip-details-holder">
    <div class="trip-details">

      <div class="price-tag">
        <span class="price-for-night">{{ priceForNight }} </span>
        <span> night</span>
      </div>

      <div class="date-details">
        <div @click="onOpenDateFrom" class="date-details-cell"
          :class="{ active: selectedSrchArea === 'date-from' }">
          <span class="check2">Check in</span>
          <!-- < class="picker-date from"></ -->
          <el-date-picker class="picker-date from" v-model="dates"
            type="daterange" start-placeholder="Check in" />
        </div>

        <div @click="onOpenDateTo" class="date-details-cell"
          :class="{ active: selectedSrchArea === 'date-to' }">
          <span class="check">Check out</span>

          <el-date-picker class="picker-date to" v-model="dates"
            type="daterange" end-placeholder="Check out" />
        </div>
      </div>
      <div class="gusts-details-container">
        <div class="gusts-details">
          <span class="check2">Gusts</span>
          <span style="padding-left: 8px; width: fit-content;">som....</span>
        </div>
        <div @click="dropOpen = !dropOpen" class="btn-arrow-details">∨</div>
      </div>
      <Transition name="fullSearch">
        <div v-if="dropOpen" class="drop-menu-details">
          <div class="input-num-container flex">
            <div class="drop-item-details flex">
              <div class="txt-drop-item-details flex ">
                <span class="search-area-text-Bold">Adults</span>
                <span class="search-area-text-light"> Ages 13 or
                  above</span>
              </div>
              <div class="input-num">
                <button @click="decGust('adults')" class="inc-btn">-</button>
                <span>
                  {{ adults }}
                </span>
                <button @click="++adults" class="inc-btn">+</button>
              </div>
            </div>
            <div class="ol"></div>
            <div class="input-num-container flex">
              <div class="drop-item-details flex">
                <div class="txt-drop-item-details flex ">
                  <span class="search-area-text-Bold">Children</span>
                  <span class="search-area-text-light"> Ages 2–12</span>
                </div>
                <div class="input-num">
                  <button @click="decGust('children')"
                    class="inc-btn">-</button>
                  <span>
                    {{ children }}
                  </span>
                  <button @click="++children" class="inc-btn">+</button>
                </div>
              </div>
            </div>
            <div class="ol"></div>

            <div class="input-num-container flex">
              <div class="drop-item-details flex">
                <div class="txt-drop-item-details flex ">
                  <span class="search-area-text-Bold">Infants</span>
                  <span class="search-area-text-light"> Under 2</span>
                </div>
                <div class="input-num">
                  <button @click="decGust('infants')" class="inc-btn">-</button>
                  <span>
                    {{ infants }}
                  </span>
                  <button @click="++infants" class="inc-btn">+</button>
                </div>
              </div>
            </div>
            <div class="ol"></div>
            <div class="input-num-container flex">
              <div class="drop-item-details flex">
                <div class="txt-drop-item flex ">
                  <span class="search-area-text-Bold">Pets</span>
                  <span class="search-area-text-light  "> Bringing a service
                    animal?</span>
                </div>
                <div class="input-num">
                  <button @click="decGust('pets')" class="inc-btn">-</button>
                  <span>
                    {{ pets }}
                  </span>
                  <button @click="++pets" class="inc-btn">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>




      <div class="action-reserve btn-hover clickable" @click="reserve">
        <span>Reserve</span>
      </div>
    </div>

    <div class="trip-message">You won't be charget yet</div>

    <div class="trip-footer">
      <div class="trip-total-price">
        <span>{{ priceForNight }} x {{ nights }}</span>
        <span>= ${{ tripPrice }}</span>
      </div>
      <div class="trip-fee">
        <span>Service fee</span>
        <span>{{ serviceFee }}</span>
      </div>
      <span>Total</span>
      <span>{{ tripTotalPrice }}</span>
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
      dates: null,
      dropOpen: false,
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0,
      trip: null,
      stayPrice: 0,
      hurtColor: '#423f3d',
      fee: 0,
      TotalDays: 0,
      totalPrice: 0
    }
  },
  methods: {



    daysCount() {
      return 5
    },
    daysRangePrice() {
      // return this.stayPrice * this.daysCount()
    },
    tripFee() {
      // const fee = 100//Math.round(this.dateRangePrice() * 0.17)
      return 100
    },
    reserve() {
      const trip = {
        dates: this.dates,
      }
      console.log('trip:', trip)
      this.$store.commit({
        type: "reserve",
        trip,
      })



    },
    decGust(guests) {
      console.log('this[guests]:', this[guests])
      if (this[guests] === 0) return
      --this[guests]
    }

  },
  computed: {
    priceForNight() {
      return `$${this.stayPrice}`
    },
    // tripPrice() {
    //   const days = this.daysRangePrice()
    //   return `$${days}`
    // },
    nights() {
      const date_1 = new Date(this.dates[1])
      const date_2 = new Date(this.dates[0])
      const difference = date_1.getTime() - date_2.getTime()
      return (Math.ceil(difference / (1000 * 3600 * 24)))
    },
    tripPrice() {
      const date_1 = new Date(this.dates[1])
      const date_2 = new Date(this.dates[0])
      const difference = date_1.getTime() - date_2.getTime()
      return (Math.ceil(difference / (1000 * 3600 * 24))) * this.stayPrice
    },
    serviceFee() {
      return `$${this.fee}`
    },
    //   tripTotalPrice() {
    //     return `$${this.tripPrice + this.tripFee}`
    //   }
  },
  created() {
    this.trip = this.$store.getters.getTrip
    this.dates = this.trip.dates
    const date_1 = new Date(this.trip.dates[1])
    const date_2 = new Date(this.trip.dates[0])
    const difference = date_1.getTime() - date_2.getTime()
    this.TotalDays = Math.ceil(difference / (1000 * 3600 * 24))
    this.stayPrice = this.stay.price
    this.fee = this.stayPrice * 0.17
  },
}
</script>
