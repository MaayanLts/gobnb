<template>
  <div class="main-layout">
    <h2 style="marging-bottom: 15px">Trips</h2>
    <span style="marging-bottom: 15px; font-size: 18px">Upcoming reservations</span>
  
    <section class="stay-list" v-for="trip in myTrips" :key="trip._id" >   
        <div class="graph-holder">
            <div style="width: 300px; height: 500px;">
            <img :src="stayPreviewImage(trip)" style="width: 100%" />
            <!-- <img src="../../public/images/001.jpeg" style="width: 100%; border-radius: 20px" />  -->
            <span style="marging-bottom: 15px; marging-top: 15px; font-size: 18px">Destination</span>
              <div class="stay-preview-info-container">
                <div class="flex space-between">
                <span class="bold">Destination: Spain</span>
                <div class="flex space-between" style="align-items: center;">
                <span style="padding-left:4px">Dates: 12/08/2022 - 15/08</span>
              </div>
            </div>

            <span style="opacity: 0.6">propertyType • type</span><br />
            <div class="bold" style="    height: 30px; align-content: inherit;  display: block; padding-top: 8px">$price night</div>
          </div>
          </div>
        </div>
    </section> 

  </div>  
</template>

<script>
import stayPreview from "../cmps/stay-preview.cmp.vue"
export default {
  data() {
    return {
      myTrips: null,
      host: null,
      userId: null,
    }
  },
  components: {
    stayPreview,
  },
  created() {
    this.loadTrips()//this.$store.getters.getTrips //orders for specific user //WHYYYYYYYYYYYYYYYYYYYYYY ???
  },
  computed:{

  },
  methods: {
    async loadTrips(stayId) {
        this.myTrips = await this.$store.dispatch('loadTrips')
    },
    stayPreviewImage(trip) {
      return `${import.meta.env.BASE_URL}images/${trip.stayPreviewImg}`
    }
  },
}
</script>