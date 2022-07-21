<template>
  <section class="tag-containrt flex inline-flex">
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
