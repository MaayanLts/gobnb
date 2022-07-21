<template >
<h2>details:</h2>
    <section class="main-details-container" v-if="stay">

        <h2>{{ stay.name }}</h2>
        <div class="limks-line">
            <div class="start-links">
                <a href="">★ {{ meanRate }}</a>
                <a href="">{{ reviews }} reviews</a>
                <a href=""> {{ stay.loc.city }}</a>
                <a href=""> {{ stay.loc.country }}</a>
            </div>

            <div class="end-links">
                <a href="">⇧ Share</a>
                <a href="">♡ Save</a>
            </div>
        </div>

        <div class="images-holder">
            <img v-for="url in stay.imgUrls" :src=url alt="">
        </div>

        <div class="hosted-by-txt">
            <h2>{{ stay.name }} hosted by {{ stay.host.fullname }}</h2>
            <h3>{{ stay.capacity }} guests</h3>
        </div>
        <img class="host-img" :src="stay.host.imgUrl" alt="">


        <p class="summary">{{ stay.summary }}</p>

        <div class="amenities">
            <h2>What this place offers</h2>
            <ul>
                <li v-for="ament in stay.amenities">{{ ament }}</li>
            </ul>
        </div>

        <div class="reviews">
            <h2>★ {{ meanRate }}</h2>

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
            this.stay = await this.$store.dispatch({type: 'getStayById',stayId})
            console.log('this.stay',this.stay);
        },
    },
    computed: {
        meanRate() {
            var sum = 0
            const reviews = this.stay.reviews
            console.log(reviews)
            reviews.forEach((rev) => { sum += rev.rate });
            return sum / reviews.length
        },
        reviews() {
            const reviews = this.stay.reviews
            return reviews.length
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
