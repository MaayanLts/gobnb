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
    // setFilterBy() {
    //   var filter = this.filter
    //   console.log(filter)
    //   this.$store.commit({
    //     type: 'setFilterBy',
    //     filterBy: JSON.parse(JSON.stringify(filter)),
    //   })
    // },
    setSortBy() {
      this.$store.commit({
        type: 'sortBy',
        sortBy: JSON.parse(JSON.stringify(this.sortBy)),
      })
    },
    tagSelect(tag) {
      console.log('tag:', tag)

    }
  },
  created() {
  },
  components: {
    stayFilterTag
  }
}
</script>
