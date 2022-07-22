<template>
  <section class="stay-preview" @click="showStayDetails">
  <img class="preview-img-carusela" :src="imgUrl" /> 
  <span class="bold">{{ stay.name }}</span><span>{{ rating  }}</span><br/>
  <span>{{ stay.propertyType }} • {{ stay.roomType }}</span><br/>
  <span>{{ stay.beds }} beds • {{ stay.bedrooms }} bedrooms</span><br/>
  <span class="bold">${{ stay.price }} night</span><br/>
  
  </section>
</template>

<script>
import slide from './slide-cmp.vue';

export default {
  name:'StayPrevew',
  props: {
    stay: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      slideIndex: 0,
    }
  },
  components: {
    slide,
  },
  computed: {
   imgUrl() {
      return `src/images/${this.stay.imgUrls[0]}`
   },
   rating(){
      return this.stay.reviewScores.rating /20
   }
  },
  created(){
  },
  unmounted() {
  },
  methods: {
    showStayDetails() {
      this.$router.push("/stay/"+ this.stay._id)
    },
  },
};
</script>
