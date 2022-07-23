
<template>

  <nav class="search-container">
    <div class="search-area destination" @click="onOpenWhere"
      :class="{ active: selectedSrchArea === 'destination' }">
      <span class="bold">Where</span>
      <input v-model="filterBy.country" type="text"
        placeholder="Search destinations">
    </div>
    <div class="vl"></div>
    <div class="search-area date-from" @click="onOpenDateFrom"
      :class="{ active: selectedSrchArea === 'date-from' }">
      <!-- <span class="bold">Check in</span> -->
      <!-- <span :style="dateSpanDisplay">Add dates</span> -->
      <el-date-picker class="picker-date-from" v-model="dates" type="daterange"
        start-placeholder="Check in" />
    </div>
    <div class="vl"></div>
    <div class="search-area date-to" @click="onOpenDateTo"
      :class="{ active: selectedSrchArea === 'date-to' }">
      <!-- <span class="bold">Check out</span> -->
      <!-- <span :style="dateSpanDisplay">Add dates</span> -->
      <el-date-picker class="picker-date-to" v-model="dates" type="daterange"
        end-placeholder="Check out" />
    </div>
    <div class="vl"></div>
    <div class="search-area guests" @click="onOpenGuests"
      :class="{ active: selectedSrchArea === 'guests' }">
      <div class="guests-placeholder">
        <span class="bold">Who</span>
        <span>Add guests</span>
      </div>
      <div class="action-search clickable" @click.stop="setFilterBy">
        <img class="search-icon" src="/src/assets/logo/serch_icon.png" alt="" />
        <span>Search</span>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      selectedSrchArea: 'destination',
      filterBy: {
        country: '',
      },
      dates: []
    }
  },
  created() {
  },
  methods: {
    onOpenWhere() {
      this.selectedSrchArea = 'destination'
    },
    onOpenDateFrom() {
      this.selectedSrchArea = 'dateFrom'
    },
    onOpenDateTo() {
      this.selectedSrchArea = 'dateTo'
    },
    onOpenGuests() {
      this.selectedSrchArea = 'guests'
    },
    setFilterBy() {
      this.$store.dispatch({
        type: 'setFilterBy',
        filterBy: {
          country: this.filterBy.country,
        },
      })
      this.$store.dispatch({
        type: 'setTrip',
        trip: {
          startDate: this.dates[0],
          endDate: this.dates[1],
        },
      });
    },
  },
  computed: {
    dateSpanDisplay() {
      return !(this.selectedSrchArea === 'dateFrom' || this.selectedSrchArea === 'dateTo') ? 'display: block' : 'display: none'
    },
    datePickerDisplay() {
      return (this.selectedSrchArea === 'dateFrom' || this.selectedSrchArea === 'dateTo') ? 'display: flex' : 'display: none'
    },
  },
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