<template>
  <section v-if="stay" class="trip-details-holder">
  <div class="trip-details">
{{stay.price}}
  </div></section>
</template>

<script>
export default {
  props: {
    stay: {
      type: Object,
    }
  },
  methods: {
  },
  computed: {
  },
  created() {
  },
}
</script>
