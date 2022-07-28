<template>

  <div id="app">
    <div class="width-100 sticky-top flex flex-row">
      <app-header />
      <stay-filter :class="stickyStyle"  /> 
    </div>
    <router-view />
    <!-- <footer class="sticky-bottom" style="padding: 10px; height: 50px; ">
      <h5 style="font-family: Airbnb-medium">© 2022 Gobnb</h5>
    </footer> -->
  </div>

</template>

<script>
import appHeader from './cmps/app-header.cmp.vue'
import stayFilter from './cmps/stay-filter.cmp.vue'

export default {
  data(){
    return{
      isStickyStyle: false,
    }
  },
  created() {
    this.$store.dispatch('loadStays')
    this.$store.commit('loadTrip')
    window.addEventListener("scroll", this.updatePosition)
  },
  destroyed() {
    window.removeEventListener("scroll", this.updatePosition);
  },
  methods: {
    updatePosition(event){
      this.isStickyStyle = (window.scrollY !== 0)
    },
  },
  computed:{
   stickyStyle(){
     return this.isStickyStyle ? 'sticky-style' : 'border-top'
    },
  },
  components: {
    appHeader,
    stayFilter,
  },
}
</script>
