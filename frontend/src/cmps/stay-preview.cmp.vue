<template>
  <li class="stay-preview">
    
  <img />
  <div>Text</div>
  </li>
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
