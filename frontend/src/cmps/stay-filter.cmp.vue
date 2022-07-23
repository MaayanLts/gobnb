<template>

  <stay-filter-tag />
  <stay-filter-modal />

</template>

<script>
import stayFilterTag from '../cmps/stay-filter-tag.cmp.vue'
import stayFilterModal from './stay-filter-modal,cmp.vue'
export default {
  methods: {
    // setSortBy() {
    //   this.$store.commit({
    //     type: 'sortBy',
    //     sortBy: JSON.parse(JSON.stringify(this.sortBy)),
    //   })
   // },
  },
  created() {
  },
  components: {
    stayFilterTag,
    stayFilterModal
  }

}
</script>
