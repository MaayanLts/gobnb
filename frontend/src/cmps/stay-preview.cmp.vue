<template>
  <li class="stay-preview">
    <div class="stay-picture-container">
        Hello, from stay component
    </div>
  </li>
</template>

<script>
export default {
  props: {
    stay: Object,
  },
  methods: {
    showStayDetails() {
      this.$router.push('/ stay/' + this.stay._id);
    },
    toEdit(stayId) {
      this.$router.push(`/ stay/edit/${stayId}`);
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
}
</style>
