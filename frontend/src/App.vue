<template>
  <div id="app">
    <app-header class="sticky" />

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

    this.$store.commit({
      type: 'setFilterBy',
      filterBy: JSON.parse(JSON.stringify(filter)),
    });

  },
  methods: {

  },
  components: {
    appHeader,
  },
}
</script>
