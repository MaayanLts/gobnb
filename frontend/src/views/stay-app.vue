<template>
  <div class="filter-nav main-layout"> </div>
  <stay-filter />
  <stay-list :stays="stays" />
</template>

<script>
import stayList from '../cmps/stay-list.cmp.vue'
import stayFilter from '../cmps/stay-filter.cmp.vue'

export default {
  name: 'StayApp',
  components: {
    stayList,
    stayFilter
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