<template>
  <section class="stay-preview" @click="showStayDetails">



    <el-carousel trigger="click" :autoplay="false">
      <el-carousel-item v-for="(img, idx) in stay.imgUrls" :key="img">
        <img class="preview-img-carusela" :src="imgUrl + img" />
      </el-carousel-item>
    </el-carousel>

    <span class="bold">{{ stay.name }}</span><span>{{ rating }}</span><br />
    <span>{{ stay.propertyType }} • {{ stay.roomType }}</span><br />
    <span>{{ stay.beds }} beds • {{ stay.bedrooms }} bedrooms</span><br />
    <span class="bold">${{ stay.price }} night</span><br /> -->
  </section>
</template>

<script>
import slide from './slide-cmp.vue';

export default {
  name: 'StayPrevew',
  props: {
    stay: {
      type: Object,
      required: true,
    },

  },
  data() {
    return {
      slideIndex: 0,
    }
  },
  components: {
    slide,
  },
  computed: {
    intraval() {
      return 0
    },
    imgUrl() {
      return `src/images/`
    },
    rating() {
      return this.stay.reviewScores.rating / 20
    }
  },
  created() {
  },
  unmounted() {
  },
  methods: {
    showStayDetails() {
      //  this.$router.push("/stay/"+ this.stay._id)
    },
  },

};
</script>

  


<style scoped>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
