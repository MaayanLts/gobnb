<template>
    <h2>{{ stay.name }}</h2>
    <div class="limks-line">
        <a href="">{{ stay.loc.country }}</a>
        <a href="">⇧ Share</a>
        <a href="">♡ Save</a>
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
        <ul><li v-for="ament in stay.amenities">{{ament}}</li></ul>
    </div>

    <div class="reviews">
        <h2>★ {{stay.reviews.rate}}</h2>
    
    </div>

</template>

<script >
export default {
    data() {
        return {
            stay: {
                "_id": "10006547",
                "name": "Ribeira Charming Duplex",
                "type": "House",
                "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
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
                    }
                ],
                "likedByUsers": ['mini-user'] // for user-wishlist : use $in
            }
        }
    },
    components: {
    },
    computed: {
    },
    created() { },
}
</script>

<style>
.limks-line {
    display: flex;
    justify-content: space-between;

}
</style>
