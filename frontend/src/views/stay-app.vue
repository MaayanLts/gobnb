<template>
  <div class="filter-nav"> </div>
  <stay-list :stays="stays" />
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
    }
  },
  computed: {
    stays() {
      return this.$store.getters.getStays
    },
  },

  created() {
  },

  methods: {

  }
}
</script>