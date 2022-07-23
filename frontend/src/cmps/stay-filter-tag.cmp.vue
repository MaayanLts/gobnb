<template>
  <div class="tags-container">
    <div class="tag-card" v-for="tag in tags" :key="tag" @click="tagSelect(tag)">
      <div><img class="img" :src="tagImage(tag)" /></div>
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
      tags: ["Islands", 'Beach', 'Amazing pools', 'OMG', 'National parks', 
             'Cabins', 'Design', "Camping", 'Amazing views', 'Desert','Arctic', 
             'Tiny homes', 'Lakefront', 'Surfing', 'Shared homes', 'Caves', 'Tropical', 'Bed & breakfasts', 'Earth homes',
             'Iconic cities','Countryside','Luxe','Lake','A-frames','Castles','Farms','historical-homes',"City", "Boat"],
    }
  },
  methods: {
    tagImage(tag) {
      return `/src/assets/fonts/airbnb-label-imgs/${tag.replace(' & ','-').replace(' ','-').toLowerCase()}.jpg`
    },
    tagSelect(tag) {
      this.$store.dispatch({
        type: 'setFilterBy',
        filterBy: { tag: JSON.parse(JSON.stringify(tag)) },
      })
    },
  },
  computed: {
  },
  created() {

  },

}
</script>
