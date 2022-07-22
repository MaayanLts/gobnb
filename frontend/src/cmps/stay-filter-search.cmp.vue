
<template>
  <nav class="main-header-nav1 ">
    <ul class="main-nav1 clean-list flex">
      <li class="li-header1" @click="onOpenWhere">
        <a href="#">where</a>
        <input v-model="filterBy.conutry" @input="setFilterBy" type="text">
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

          <div class="search-icon-container1">
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
        conutry: '',

      }
    }
  },
  created() { },
  methods: {




    setFilterBy() {
      var filter = this.filterBy;
      this.$store.dispatch({
        type: 'setFilterBy',
        filterBy: JSON.parse(JSON.stringify(filter)),
      });
    },
  },
  computed: {},
  unmounted() { },
}


</script>

<style >
</style>