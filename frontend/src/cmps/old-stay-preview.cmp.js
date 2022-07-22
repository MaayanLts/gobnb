<template>
  <section class="stay-preview" @click="showStayDetails">
  <!-- Slideshow container -->
  <div class="slideshow-container"> 
    <slide v-for="(imageUrl, index) in stay.imgUrls" :key="imageUrl" :imageUrl="imageUrl" :style="display"/> 

    <!-- Next and previous buttons -->
    <a class="prev" @click="plusSlides(-1)">&#10094;</a>
    <a class="next" @click="plusSlides(1)">&#10095;</a>
  
    <!-- The dots/circles -->
    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
      <span class="dot" onclick="currentSlide(4)"></span>
      <span class="dot" onclick="currentSlide(5)"></span>
    </div> 
  </div>

    <!-- Full-width images with number and caption text -->

    <!-- <div class="mySlides fade" v-for="imageUrl in stay.imgUrls" :key="imageUrl">
      <div class="numbertext">1 / 5</div>
      <img class="slide-img" :src="imgUrl(stay.imgUrls[0])">
      <div class="text">Caption Text</div>
    </div> -->

    <!-- <div class="mySlides fade">
      <div class="numbertext">2 / 5</div>
      <img class="slide-img" :src="imgUrl(stay.imgUrls[1])">
      <div class="text">Caption Two</div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">3 / 5</div>
      <img class="slide-img" :src="imgUrl(stay.imgUrls[2])">
      <div class="text">Caption Three</div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">4 / 5</div>
      <img class="slide-img" :src="imgUrl(stay.imgUrls[3])">
      <div class="text">Caption Three</div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">5 / 5</div>
      <img class="slide-img" :src="imgUrl(stay.imgUrls[4])">
      <div class="text">Caption Three</div>
    </div> -->




  <!-- <img class="preview-img-carusela" :src="imgUrl" />  -->
  <span class="bold">{{ stay.name }}</span><span>{{ rating  }}</span><br/>
  <span>{{ stay.propertyType }} • {{ stay.roomType }}</span><br/>
  <span>{{ stay.beds }} beds • {{ stay.bedrooms }} bedrooms</span><br/>
  <span class="bold">${{ stay.price }} night</span><br/>
  
  </section>
</template>

<script>
import slide from './slide-cmp.vue';

export default {
  name:'StayPrevew',
  props: {
    stay: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      selectedSlideIndex: 0,
    }
  },
  components: {
    slide,
  },
  computed: {
  //  imgUrl() {
  //     return `src/images/${this.stay.imgUrls[0]}`
  //  },
  display(){
     console.log(this.$refs.index)
      //return (index === this.selectedSlideIndex) ? "display: block" : "display: none"
            //return (index === this.selectedSlideIndex) ? 
      return "display: block" //: "display: none"
  },
  rating(){
      return this.stay.reviewScores.rating /20
   }
  },
  created(){
    //this.showSlides(0)
  },
  unmounted() {
  },
  methods: {
    // imgUrl(imgName) {
    //     return `src/images/${imgName}`
    // },
    // display(index){
    //   //return (index === this.selectedSlideIndex) ? 
    //   //return "display: block" //: "display: none"
    // },
    plusSlides(n) {
      this.selectedSlideIndex += n
      //showSlides(this.slideIndex += n);
    },
    currentSlide(n) {
      //showSlides(this.slideIndex = n);
    },
    showSlides(n) {
      console.log("Show slide " + n)

      // let i;
      // let slides = document.getElementsByClassName("mySlides");
      // let dots = document.getElementsByClassName("dot");
      // if (n > slides.length) {
      //   this.slideIndex = 1
      // }
      // if (n < 1) {this.slideIndex = slides.length}
      // for (i = 0; i < slides.length; i++) {
      //   slides[i].style.display = "none";
      // }
      // for (i = 0; i < dots.length; i++) {
      //   dots[i].className = dots[i].className.replace(" active", "");
      // }
      // slides[this.slideIndex-1].style.display = "block";
      // dots[this.slideIndex-1].className += " active";
    },
    showStayDetails() {
    //  this.$router.push("/stay/"+ this.stay._id)
    },
  },
};
</script>
