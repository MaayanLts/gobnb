
<template>
  <nav class="main-header-nav1 ">
    <ul class="main-nav1 clean-list flex">
      <li class="li-header1" @click="onOpenWhere">
        <a href="#">where</a>
        <input v-model="filterBy.country" type="text">
      </li>
      <li class="li-header1" @click="onOpenWhen">





        <div class="block">

          <el-date-picker type="daterange" unlink-panels
            start-placeholder="check in" end-placeholder="Check out" />
        </div>
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
      },





    }
  },
  created() {







  },
  methods: {
    setFilterBy() {
      //var filter = filterBy.conutry//this.filterBy;
      this.$store.dispatch({
        type: 'setFilterBy',
        filterBy: { country: this.filterBy.country },//JSON.parse(JSON.stringify(this.filterBy.country)),
      });
    },


  },
  computed: {},
  unmounted() { },
}


</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>