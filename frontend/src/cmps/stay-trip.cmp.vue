<template>
  <section v-if="stay" class="trip-details-holder">
{{stay.price}}
  </section>
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
