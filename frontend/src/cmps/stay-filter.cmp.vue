<template>

</template>

<script>
export default {

  data() {

  },

  methods: {
    setFilterBy() {
      var filter = this.filter
      console.log(filter)
      this.$store.commit({
        type: 'setFilterBy',
        filterBy: JSON.parse(JSON.stringify(filter)),
      })

    },
    setSortBy() {
      this.$store.commit({
        type: 'sortBy',
        sortBy: JSON.parse(JSON.stringify(this.sortBy)),
      })
    },
  },
}
</script>
