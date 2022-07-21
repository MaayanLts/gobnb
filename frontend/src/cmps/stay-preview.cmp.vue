<template>
  <section class="stay-preview">
    
  <img class="preview-img-carusela" :src="imgUrl" />
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
  computed: {
    imgUrl() {
      return `src/images/${this.stay.imgUrls[0]}`
    },
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
