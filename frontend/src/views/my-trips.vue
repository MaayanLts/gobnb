<template>
    <div>Trips</div>
    <div>Upcoming reservations</div>
    <section class="stay-list" v-for="trip in myTrips" :key="trip._id" > 
        <div class="graph-holder">
            <div style="width: 300px"><img :src="stayPreviewImage(trip)" style="width: 100%" /></div>
        </div>
    </section> 
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
        this.$store.commit('loadMyTrips')
        this.myTrips = this.$store.getters.myTrips //orders for specific user
  },
  methods: {
    stayPreviewImage(trip){
        const img =  'src/images/' + trip.stayPreviewImg
        return img
    }
  },
}
</script>