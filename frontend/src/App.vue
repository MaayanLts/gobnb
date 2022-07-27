<template>

  <div id="app">
    <div class="width-100 sticky">
      <app-header /><!-- class="sticky" /> -->
    </div>
    <div class="hol"></div>
    <router-view />
    <footer>
      <h5>copyright</h5>
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
