<template>
  <section class="stay-preview" @click.stop = "showStayDetails">
  
    <el-carousel trigger="click" :autoplay="false">
      <el-carousel-item v-for="(img) in stay.imgUrls" :key="img">
        <svg class="svg-heart" style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
        </svg>
        <img class="preview-img-carusela" :src="imgUrl + img" />
      </el-carousel-item>
    </el-carousel>

    <div class="stay-preview-info-container">
      <div class="flex space-between">
        <span class="bold">{{ propertyTypeAndLocation }} </span>
        <div><img src="src/images/star.svg" /><span>{{  rating }}</span></div>
      </div>
      <span>{{ stay.propertyType }} • {{ stay.roomType }}</span><br />
      <span>{{ stay.beds }} beds • {{ stay.bedrooms }} bedrooms</span><br />
      <span class="bold">${{ stay.price }} night</span><br />
    </div>

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
    propertyTypeAndLocation(){
        let propertyDesc = ''
        if(this.stay.propertyType){
          propertyDesc = this.stay.propertyType
          if(this.stay.address.city) 
            propertyDesc += ` in `
        }
        if(this.stay.address.city){  
          propertyDesc += `${this.stay.address.city}`
          if(this.stay.address.country) 
            propertyDesc += `, `
        }

        if(this.stay.address.country) 
          propertyDesc += `${this.stay.address.country}`

        return propertyDesc
    },
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
      this.$router.push("/stay/"+ this.stay._id)
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
