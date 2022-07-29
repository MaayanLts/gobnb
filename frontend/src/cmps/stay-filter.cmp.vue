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
import stayFilterModal from './stay-filter-modal.cmp.vue'
export default {
  methods: {
  },
  computed: {
    isVisible() {
      const isMainScreen = !(this.$route.name === 'stay-details' || this.$route.name === 'host')
      return (isMainScreen) ? ' ' : 'display: none'
    },
  },
  created() {
  },
  components: {
    stayFilterTag,
    stayFilterModal
  }

}
</script>
