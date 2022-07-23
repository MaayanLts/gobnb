<template>
  <section class="tag-containrt flex inline-flex" @click="tagSelect(tag)">
    <img class="img" :src="tagImag" />
    <i>{{ tag }}</i>
  </section>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
    }
  },


  methods: {

    tagSelect(tag) {
      this.$store.dispatch({
        type: 'setFilterBy',
        filterBy: { tag: JSON.parse(JSON.stringify(tag)) },
      })
    },

  },
  computed: {
    tagImag() {
      return `/src/assets/fonts/airbnb-label-imgs/${this.tag}.jpg`
    }
  },
  created() {

  },

}
</script>
