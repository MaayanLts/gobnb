<template >
    <section class="main-details-container">

        <h2>{{ stay.name }}</h2>
        <div class="limks-line">
            <div class="start-links">
                <a href="">★ {{ meanRate }}</a>
                <a href="">★ {{ reviews }} reviews</a>
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
            // stay: null,

            stay: {
                "_id": "10006547",
                "name": "Ribeira Charming Duplex",
                "type": "House",
                "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "https://a0.muscache.com/im/users/31635864/profile_pic/1429604852/original.jpg?aki_policy=profile_x_medium", "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "https://a0.muscache.com/im/users/31635864/profile_pic/1429604852/original.jpg?aki_policy=profile_x_medium", "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"],
                "price": 80.00,
                "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
                "capacity": 8,
                "tags": ['snow', 'islands', 'omg'],
                "amenities": [
                    "TV",
                    "Wifi",
                    "Kitchen",
                    "Smoking allowed",
                    "Pets allowed",
                    "Cooking basics"
                ],
                "host": {
                    "_id": "51399391",
                    "fullname": "Davit Pok",
                    "imgUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_small",
                },
                "loc": {
                    "country": "Portugal",
                    "countryCode": "PT",
                    "city": "Porto",
                    "address": "17 Kombo st",
                    "lat": -8.61308,
                    "lng": 41.1413
                },
                "reviews": [
                    {
                        "id": "madeId",
                        "txt": "Very helpful hosts. Cooked traditional...",
                        "rate": 4,
                        "by": {
                            "_id": "u102",
                            "fullname": "user2",
                            "imgUrl": "/img/img2.jpg"
                        }
                    },
                    {
                        "id": "gfdgfds",
                        "txt": "nice hosts. Cooked traditional...",
                        "rate": 5,
                        "by": {
                            "_id": "u103",
                            "fullname": "user2",
                            "imgUrl": "/img/img2.jpg"
                        }
                    }
                ],
                "likedByUsers": ['mini-user'] // for user-wishlist : use $in
            }
        }
    },
    methods: {
        async getStayById(stayId) {
            this.stay = await this.$store.dispatch({
                type: 'getStayById',
                stayId,
            })
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
