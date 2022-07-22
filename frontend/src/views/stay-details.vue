<template >
    <section class="main-details-container" v-if="stay">

        <h2 class="details-title">{{ stay.name }}</h2>
        <div class="links-line">
            <div class="start-links">
                <a href=""><img class="star" src="../assets/logo/starAirbnb.svg"> {{ stay.reviewScores.rating / 20
                }}</a>
                <span>•</span>
                <a href="">{{ reviews }} reviews</a>
                <span class="superhost" v-if="stay.host.isSuperhost"><span>•</span>
                    <img src="../assets/logo/superHost.png"> Superhost
                </span>

                <span>•</span>
                <a href="">{{ stay.host.location }}</a>
            </div>

            <div class="end-links">
                <div class="shareBtn">
                    <img src="../assets/logo/shareAirbnb.svg" alt="">
                    <a href="">Share</a>
                </div>
                <div class="saveBtn">
                    <img src="../assets/logo/saveAirbnb.svg" alt="">
                    <a href="">Save</a>
                </div>
            </div>
        </div>
        <div class="images-holder">

            <img :src="imgUrl(stay.imgUrls[0])" alt="">
            <img :src="imgUrl(stay.imgUrls[1])" alt="">
            <img :src="imgUrl(stay.imgUrls[2])" alt="">
            <img :src="imgUrl(stay.imgUrls[3])" alt="">
            <img :src="imgUrl(stay.imgUrls[4])" alt="">

        </div>
        <div class="host-holder">

            <div class="hosted-by-txt">
                <h2>{{ stay.propertyType }} hosted by {{ stay.host.fullname }}</h2>
                <h3>{{ stay.capacity }} guests</h3><span> • </span>
                <h3>{{ bedrooms }}</h3><span> • </span>
                <h3>{{ stay.beds }} beds</h3><span> • </span>
                <h3>{{ stay.bath }} bath</h3>
            </div>
            <img class="host-img" :src="stay.host.pictureUrl" alt="hostPic">
        </div>



        <p class="summary">{{ stay.summary }}</p>

        <div class="amenities">
            <h2>What this place offers</h2>
            <ul>
                <li v-for="ament in stay.amenities">{{ ament }}</li>
            </ul>
        </div>

        <div class="reviews">
            <h2>★ {{ stay.reviewScores.rating / 20 }}</h2>

        </div>
    </section>

</template>

<script >


export default {

    data() {
        return {
            stay: null,
        }
    },
    methods: {
        async getStayById(stayId) {
            this.stay = await this.$store.dispatch({ type: 'getStayById', stayId })
            console.log('this.stay', this.stay);
        },
        imgUrl(imgName) {
            return `src/images/${imgName}`
        },
    },
    computed: {
        reviews() {
            const reviews = this.stay.reviews
            return reviews.length
        },
        bedrooms() {
            const bedrooms = +this.stay.bedrooms
            console.log(bedrooms)
            return (bedrooms > 1) ? bedrooms + '\ bedrooms' : bedrooms + '\ bedroom'
        }
    },
    created() {

        var stayId = this.$route.params.id
        this.getStayById(stayId)
    },
}
</script>

<style>
</style>
