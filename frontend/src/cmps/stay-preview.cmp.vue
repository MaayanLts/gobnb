<template>
  <section class="stay-preview">
    
  <!-- <img :src="stay.imgUrls[0]" /> -->
  <span>{{ stay.name }}</span>
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
  data() {
  },
  components: {
  },
  unmounted() {
    console.log('Stay preview - this.stay :', this.stay.name)
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
  },
};
</script>

<style scoped>
.stay-preview {
  border: 2px solid red;
  width: 200px;
  height: 200px;
}
</style>
