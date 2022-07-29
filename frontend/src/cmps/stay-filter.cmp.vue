<template>

  <div class="main-layout">
    <div class="stay-filter" :style="isVisible">
      <stay-filter-tag />
      <stay-filter-modal />
    </div>
  </div>
</template>

<script>
import stayFilterTag from '../cmps/stay-filter-tag.cmp.vue'
import { eventBus } from '../services/event-bus.service'
import stayFilterModal from './stay-filter-modal.cmp.vue'
export default {
  data(){
    return{
      isFilterOpen: false
    }
  },
  methods: {
  },
  computed: {
    isVisible() {
      const isMainScreen = !(this.$route.name === 'stay-details' || this.$route.name === 'host')
      return (isMainScreen && !this.isFilterOpen) ? ' ' : 'display: none'
      if (this.isFilterOpen) return 'display: none'
    },
  },
  created() {},
  mounted() {

  },
  components: {
    stayFilterTag,
    stayFilterModal
  },
  mounted() {
    eventBus.on('filter-open', (data) => {
       this.isFilterOpen = data
    })
  }

}
</script>

