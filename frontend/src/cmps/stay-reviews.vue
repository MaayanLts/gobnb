<template>
  <section class="main-reviews-container">
    <h2>★ {{ stay.reviewScores.rating / 20 }}<span> • </span>{{ stay.numOfReviews }} reviews </h2>
    <div class="reviews-bars">

      <div class="cleanliness-bar">
        <h4>Cleanliness</h4>

        <div class="bar">
          <div class="fill" :style="style('cleanliness')"></div>
        </div>

        <span>{{ stay.reviewScores.cleanliness }}</span>
      </div>


      <div class="communication-bar">
        <h4>Communication</h4>

        <div class="bar">
          <div class="fill" :style="style('communication')"></div>
        </div>

        <span>{{ stay.reviewScores.communication }}</span>
      </div>

      <div class="checkin-bar">
        <h4>Check-in</h4>

        <div class="bar">
          <div class="fill" :style="style('checkin')"></div>
        </div>

        <span>{{ stay.reviewScores.checkin }}</span>
      </div>

      <div class="accuracy-bar">
        <h4>Check-in</h4>

        <div class="bar">
          <div class="fill" :style="style('accuracy')"></div>
        </div>

        <span>{{ stay.reviewScores.accuracy }}</span>
      </div>

      <div class="location-bar">
        <h4>Check-in</h4>

        <div class="bar">
          <div class="fill" :style="style('location')"></div>
        </div>

        <span>{{ stay.reviewScores.location }}</span>
      </div>

      <div class="value-bar">
        <h4>Check-in</h4>

        <div class="bar">
          <div class="fill" :style="style('value')"></div>
        </div>

        <span>{{ stay.reviewScores.value }}</span>
      </div>

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
  data() {
    return {
    }
  },
  methods: {
    style(rev) {
      console.log(rev);
      console.log(this.stay.reviewScores[rev])
      return 'width:' + this.stay.reviewScores[rev] * 10 + '%'
    }
  },
  computed: {
  },
  created() {
  },
}
</script>
