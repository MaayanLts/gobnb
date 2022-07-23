<template>
  <div class="tags-container">
    <div class="tag-card" v-for="tag in tags" :key="tag" @click="tagSelect(tag)">
      <div><img class="img" :src="tagImage" /></div>
      <div>{{ tag }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
    }
  },
   data() {
    return {
      tags: ["island", "lake", "snow", "city", "camping"],
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
    tagImage() {
      return `/src/assets/fonts/airbnb-label-imgs/island.jpg`
    }
  },
  created() {

  },

}
</script>
