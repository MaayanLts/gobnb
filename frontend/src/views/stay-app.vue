<template>
  <div class="filter-nav"> </div>
  <stay-list v-if="stay" :stay="stay" />

</template>

<script>
import stayList from '../cmps/stay-list.cmp.vue'

export default {
  name: 'StayApp',

  components: {
    stayList
  },
  data() {
    return {
      stay: null
    }
  },
  computed: {
    // stay() {
    //   return 
    // },
  },

  created() {
    this.stay = this.$store.getters.getStays
    console.log('this.stay :', this.stay)


  },
  methods: {

  }
}
</script>