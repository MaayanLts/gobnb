<template>
  <section class="stay-preview" @click="goToStayDetails">
    
  <img class="preview-img-carusela" :src="imgUrl" />
  <span style="font-weight: bold">{{ stay.name }}</span><br/>
  <span>{{ stay.propertyType }} ~ {{ stay.roomType }}</span><br/>
  <span>${{ stay.price }} night</span><br/>
  <span>{{ stay.beds }} beds ~ {{ stay.bedrooms }} bedrooms</span>
  </section>
</template>

<script>

export default {
  name:'StayPrevew',
  props: {
    stay: {
      type: Object,
      required: true,
    }
  },
  components: {
  },
  computed: {
    imgUrl() {
      return `src/images/${this.stay.imgUrls[0]}`
    },
  },
  unmounted() {
  },
  methods: {
    showStayDetails() {
      this.$router.push('/stay/' + this.stay._id);
    },
    toEdit(stayId) {
      this.$router.push(`/stay/edit/${stayId}`);
    },
    removeStay() {
      this.$store.dispatch({
        type: 'removeStay',
        stayId: this.stay._id,
      });
    },
    goToStayDetails(){
      this.$router.push("/stay/"+ this.stay._id)
    }
  },
};
</script>
