<template>
  <section v-if="stay" class="trip-details-holder brd-red">
    <div class="trip-details">{{stay.price}}
      <div class="trip-btn">{{stay.price}}</div>
    </div>
    
    <div class="trip-message brd-green">You won't be charget yet</div>
    <div class="trip-footer brd-green">{{stay.price}}
      <div></div>
    </div>
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
