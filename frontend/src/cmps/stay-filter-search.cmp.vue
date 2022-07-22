
<template>
  <nav class="main-header-nav1 ">
    <ul class="main-nav1 clean-list flex">
      <li class="li-header1" @click="onOpenWhere">
        <a href="#">where</a>
        <input v-model="filterBy.country" type="text">
      </li>
      <li class="li-header1" @click="onOpenWhen">
        <a href="#">cheak in </a>
        <input type="date">
      </li>
      <li class="li-header1" @click="onOpenWhen">
        <a href="#">cheak out </a>
        <input type="date">
      </li>

      <li @click="onOpenGuests">
        <div class="li-header">
          <a href="#">who</a>

          <div class="search-icon-container1" @click="setFilterBy"> 
            <img class="search-icon1" src="../assets/logo/serch_icon.png"
              alt="">
          </div>
        </div>
        <input type="number">
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      filterBy: {
        country: '',
      }
    }
  },
  created() { },
  methods: {
    setFilterBy() {
      //var filter = filterBy.conutry//this.filterBy;
      this.$store.dispatch({
        type: 'setFilterBy',
        filterBy: {country: this.filterBy.country},//JSON.parse(JSON.stringify(this.filterBy.country)),
      });
    },
  },
  computed: {},
  unmounted() { },
}


</script>

<style >
</style>