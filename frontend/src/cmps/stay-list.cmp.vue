<template>
  <section class="stay-list-container">
    <!-- <button @click="toAddStay()">Add Stay</button> -->
    <div class="stay-list">
      <!-- clean-list stay-list-layout">> -->
      <stay-preview v-for="stay in stays" :key="stay._id" :stay="stay" />
    </div>
  </section>
</template>

<script>
import stayPreview from "./stay-preview.cmp.vue"

export default {
  props: {
    stays: {
      type: Array,
      requered: true,
      default: []
    }
  },

  components: {
    stayPreview,
  },
  methods: {
    toAddStay() {
      this.$router.push("/stay/edit")
    },
  },
  created() {
    console.log(this.stays);
  },
  unmounted() {
  },
}
</script>