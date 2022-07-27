<template>

  <div id="app">
    <div class="width-100 sticky-top">
      <app-header />
    </div>
    <div class="hol"></div>
    <router-view />
    <footer class="sticky-bottom" style="padding: 10px; height: 50px; ">
      <h5 style="font-family: Airbnb-medium">© 2022 Gobnb</h5>
    </footer>
  </div>

</template>

<script>
import appHeader from './cmps/app-header.cmp.vue'

export default {
  created() {
    this.$store.dispatch('loadStays')

    this.$store.commit('loadTrip');

  },
  methods: {

  },
  components: {
    appHeader,
  },
}
</script>
