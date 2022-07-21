<template>
  <section class="stay-preview">
    
  <img class="preview-img-carusela" :src="stay.imgUrls[0]" />
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
  border: 2px solid rgb(158, 146, 146);
  width: 250px;
  height: 250px;
}

.preview-img-carusela{
    width: 100%;
    height: 200px;
}
</style>
