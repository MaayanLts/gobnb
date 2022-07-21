<template>
  <section>
    hhh
    <img :src="tagImag" />
  </section>
</template>

<script>
import { ssrContextKey } from 'vue'

export default {
  props: {
    tag: {
      type: String,
      required: true,
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
    console.log(this.tag);

  },
}
</script>
