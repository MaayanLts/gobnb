<template>
  <div id="app">
    <app-header />
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

  },
  methods: {

  },
  components: {
    appHeader,
  },
}
</script>
