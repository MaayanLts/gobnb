<template>

  <stay-filter-tag v-for="tag in tags" :key="tag" :tag="tag" />

</template>

<script>
import stayFilterTag from '../cmps/stay-filter-tag.cmp.vue'
export default {


  data() {
    return {
      tags: ["island", "lake", "snow", "city", "camping"],
    }
  },

  methods: {

    setSortBy() {
      this.$store.commit({
        type: 'sortBy',
        sortBy: JSON.parse(JSON.stringify(this.sortBy)),
      })
    },

  },
  created() {
  },
  components: {
    stayFilterTag
  }
}
</script>
