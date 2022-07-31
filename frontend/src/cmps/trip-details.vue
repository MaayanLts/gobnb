<template>
  <section v-if="stay" class="trip-details-holder">
    <div class="trip-details">

      <div class="price-tag">
        <div class="">
          <span class="price-for-night">{{ priceForNight }} </span>
          <span> night</span>
        </div>
      </div>

      <div class="trip-order-container">
        <div class="date-details">
          <div @click="onOpenDateFrom" class="date-details-cell">
            <span class="check">Check in</span>
            <!-- < class="picker-date from"></ -->
            <el-date-picker class="picker-date from" v-model="dates"
              type="daterange" start-placeholder="Check in" />
          </div>

          <div @click="onOpenDateTo" class="date-details-cell">
            <span class="check">Check out</span>

            <el-date-picker @click="show = true"
              class="picker-date to bold-trip" v-model="dates" type="daterange"
              end-placeholder="Check out" />
          </div>
        </div>
        <div class="gusts-details-container">
          <div class="gusts-details">
            <span class="check">GUESTS</span>
            <span class="bold-trip">{{ hm }}</span>
          </div>
          <div @click="dropOpen = !dropOpen" class="btn-arrow-details"><img
              class="icon-arrow" src="../assets/logo/down-arrow.png" alt="">
          </div>
        </div>
        <Transition name="fullSearch">
          <div v-if="dropOpen" class="drop-menu-details">
            <div class="input-num-container-details flex">
              <div class="drop-item-details flex">
                <div class="txt-drop-item-details flex ">
                  <span class="search-area-text-Bold-details">Adults</span>
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
              <div class="input-num-container-details flex">
                <div class="drop-item-details flex">
                  <div class="txt-drop-item-details flex ">
                    <span class="search-area-text-Bold-details">Children</span>
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

              <div class="input-num-container-details flex">
                <div class="drop-item-details flex">
                  <div class="txt-drop-item-details flex ">
                    <span class="search-area-text-Bold-details">Infants</span>
                    <span class="search-area-text-light"> Under 2</span>
                  </div>
                  <div class="input-num">
                    <button @click="decGust('infants')"
                      class="inc-btn">-</button>
                    <span>
                      {{ infants }}
                    </span>
                    <button @click="++infants" class="inc-btn">+</button>
                  </div>
                </div>
              </div>
              <div class="ol"></div>
              <div class="input-num-container-details flex">
                <div class="drop-item-details flex">
                  <div class="txt-drop-item-details flex ">
                    <span class="search-area-text-Bold-details">Pets</span>
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

              <div class="input-num-container-details flex">
                <div class="drop-item-details flex">
                  <div class="txt-drop-item flex ">
                    <p class="stay-desc-details">This place has a maximum of 6
                      guests, not including
                      infants. If you're bringing more than 2 pets, please let
                      your host know.</p>
                  </div>

                </div>
              </div>
              <div @click="dropOpen = !dropOpen" class="close-drop">Close</div>
            </div>
          </div>
        </Transition>
      </div>



      <div @click="reserve">
        <div class="btn-container">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="content">
            <button class="action-btn">
              <span>Reserve</span>
            </button>
          </div>
        </div>
      </div>



      <el-dialog v-model="dialogVisible" title="Reservation" width="30%">
        <div class="reservation">
          <span class="title-reservation price-for-night">Thank you for your
            booking</span>
          <div class="host-info-modal-container">
            <img :src="stay.host.pictureUrl" alt="" srcset="">
            <span class="host-reservation">your host {{ stay.host.fullname
            }}</span>
          </div>
          <span class="info-reservation"> Thank you so much for choosing to stay
            with us! We’ll send you
            more information about check-in when your reservation date is
            sooner.
            In the meantime, if you feel like you have any questions or
            concerns,
            feel free to let us know, and we will do our best to accommodate
            you.</span>
          <span class=" price-total">
            Reservation Code: <span class="code-reservation"> {{
                reservationCode
            }}</span></span>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="goToMyTrip()">Ok
            </el-button>
          </span>
        </template>
      </el-dialog>




      <div class="trip-message">You won't be charget yet</div>

      <div :class="none" class="trip-footer">
        <div class="trip-fee">
          <span class="price-line">${{ stayPrice }} x {{ nights }} nights</span>
          <span class="price-total"> ${{ tripPrice }}</span>
        </div>

        <div class="trip-fee">
          <span class="price-line">Service fee</span>
          <span class="price-total">{{ serviceFee }}</span>
        </div>
        <div class="trip-fee total">
          <span>Total</span>
          <span>{{ tripTotalPrice }}</span>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { makeId } from '../services/util.service'
export default {
  props: {
    stay: {
      type: Object,
    }
  },
  data() {
    return {
      reservationCode: null,
      show: false,
      trip: null,
      dates: null,
      dropOpen: false,
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0,
      stayPrice: 0,
      hurtColor: '#423f3d',
      fee: 0,
      TotalDays: 0,
      totalPrice: 0,
      dialogVisible: ref(false)
    }
  },
  methods: {
    reserve() {
      const trip = {
        stayIddest: { country: this.stay.address.country },
        dates: this.dates,
        guests: {
          adults: this.adults,
          children: this.children,
          infants: this.infants,
          pets: this.pets
        }
      }
      this.$store.commit({
        type: "reserve",
        trip,
      })

      this.dialogVisible = true
    },
    goToMyTrip(){
      this.dialogVisible = false
      this.$router.push("/myTrip")
    },
    decGust(guests) {
      console.log('this[guests]:', this[guests])
      if (this[guests] === 0) return
      --this[guests]
    },
    setDates(){
      if (!this.trip.dates || this.trip.dates.length === 0){
        let dateFrom = new Date()
        let dateTo =  new Date()

        dateFrom = dateFrom.setDate(dateFrom.getDate() + 7)
        dateTo = dateTo.setDate(dateTo.getDate() + 10)

        this.$store.commit({type: "setTripDates", dates: [dateFrom, dateTo]})
      }

      this.dates = this.trip.dates
    },
    getNights(){
      //let dateTo = new Date()
      //let dateFrom = new Date()

      //if (this.dates&&this.dates.length > 0){
        const dateFrom = new Date(this.dates[0])
        const dateTo = new Date(this.dates[1])
      //} else{
     //   dateFrom = new Date(dateFrom.setDate(dateFrom.getDate() + 7))
      //  dateTo = new Date(dateTo.setDate(dateTo.getDate() + 10))

       // this.$store.commit({type: "setTripDates", dates: {dateFrom, dateTo}})
        //this.dates.push(dateFrom)
       // this.dates.push(dateTo) TODO: 
     // }

      //const dateTo = new Date(this.dates[1])
      //const dateFrom = new Date(this.dates[0])
      const difference = dateTo.getTime() - dateFrom.getTime()
      return (Math.ceil(difference / (1000 * 3600 * 24)))
    }
  },
  computed: {
    priceForNight() {
      return `$${this.stayPrice}`
    },
    imgUrl(imgName) {
      return `src/images/${imgName}`
    },
    hm() {
      //return `${this.adults} adults ${this.children} children`
      return `${this.adults + this.children}` //adults ${this.children} children`
    },
    nights() {
      // const dateTo = new Date(this.dates[1])
      // const dateFrom = new Date(this.dates[0])
      // const difference = dateTo.getTime() - dateFrom.getTime()
      // return (Math.ceil(difference / (1000 * 3600 * 24)))
      const nights = this.getNights()
      return nights
    },
    tripPrice() {
      // const dateTo = new Date(this.dates[1])
      // const dateFrom = new Date(this.dates[0])
      // const difference = dateTo.getTime() - dateFrom.getTime()
      const price = Math.ceil(this.getNights() * this.stayPrice)
      return price//(Math.ceil(difference / (1000 * 3600 * 24))) * this.stayPrice
    },
    serviceFee() {
      return `$${this.fee}`
    },
    tripTotalPrice() {
      //const dateTo = new Date(this.dates[1])
      //const dateFrom = new Date(this.dates[0])
     // const difference = dateTo.getTime() - dateFrom.getTime()
      let totalPrice = this.getNights() * this.stayPrice  + this.fee
      totalPrice = `$${Math.ceil(totalPrice).toLocaleString()}`
      return totalPrice//'$' + Math.ceil(totalPrice)   //((Math.ceil(difference / (1000 * 3600 * 24))) * this.stayPrice + this.fee)
    },
    none() {
      if (this.TotalDays === 0) return 'none'
    },

    arrowDirection() {
      let srcDown = "../assets/logo/down-arrow.png"
      let srcUp = "'../assets/logo/up-arrow.png'"
      if (!this.dropOpen) return srcDown
      if (this.dropOpen) return srcUp
    }
  },
  created() {
    this.trip = this.$store.getters.getTrip
    this.setDates()

    // let dateTo = ''
    // let dateFrom = ''
    // if (this.trip.dates)
    // {
    //   dateTo = new Date(this.trip.dates[1])
    //   dateFrom = new Date(this.trip.dates[0])
    // } else
    // {
    //   dateTo = new Date()
    //   dateFrom = new Date()
    // }
    //const difference = dateTo.getTime() - dateFrom.getTime()
    this.TotalDays = this.getNights()//Math.ceil(difference / (1000 * 3600 * 24))
    this.stayPrice = this.stay.price
    this.fee = Math.round(this.stayPrice * 1.17)
    this.adults = (this.trip.guests.adults === 0) ? 1 : this.trip.guests.adults 
    this.children = this.trip.guests.children
    this.infants = this.trip.guests.infants
    this.reservationCode = makeId(9)
    this.pets = this.trip.guests.pets
  },
}
</script>
