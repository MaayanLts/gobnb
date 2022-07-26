
<template>
  <div class="width-100">
    <!-- <div @click="isOpen = !isOpen" v-if="isOpen" class="drop-menu-container">
    </div> -->
    <nav class="search-container large-container">

      <div class="search-area large-area destination" @click="onOpenWhere"
        :class="{ active: selectedSrchArea === 'destination' }">
        <span class="large-area-span">Where</span>
        <input v-model="filterBy.country" type="text"
          placeholder="Search destinations">
      </div>

      <div class="vl"></div>
      <div class="search-area large-area date-from" @click="onOpenDateFrom"
        :class="{ active: selectedSrchArea === 'date-from' }">

        <el-date-picker class="picker-date-from" v-model="dates"
          type="daterange" start-placeholder="Check in" />
      </div>
      <div class="search-area large-area date-to" @click="onOpenDateTo"
        :class="{ active: selectedSrchArea === 'date-to' }">
        <!-- <span class="bold">Check out</span> -->
        <!-- <span :style="dateSpanDisplay">Add dates</span> -->
        <el-date-picker class="picker-date-to" v-model="dates" type="daterange"
          end-placeholder="Check out" />
      </div>
      <div class="search-area large-area guests" @click="onOpenGuests"
        :class="{ active: selectedSrchArea === 'guests' }">
        <div class="guests-placeholder">
          <span class="large-area-span">Who</span>
          <span class="search-area-text-light">Add guests</span>
          <div class="drop-menu">

            <div class="input-num-container flex">
              <div class="drop-item flex">
                <div class="txt-drop-item flex ">
                  <span class="search-area-text-Bold">Adults</span>
                  <span class="search-area-text-light"> Ages 13 or
                    above</span>
                </div>
                <div class="input-num">
                  <button @click="--adults" class="inc-btn">-</button>
                  <span>
                    {{ adults }}
                  </span>
                  <button @click="++adults" class="inc-btn">+</button>
                </div>
              </div>
            </div>
            <div class="input-num-container flex">
              <div class="drop-item flex">
                <div class="txt-drop-item flex ">
                  <span class="search-area-text-Bold">Children</span>
                  <span class="search-area-text-light"> Ages 2–12</span>
                </div>
                <div class="input-num">
                  <button @click="--adults" class="inc-btn">-</button>
                  <span>
                    {{ adults }}
                  </span>
                  <button @click="++adults" class="inc-btn">+</button>
                </div>
              </div>
            </div>
            <div class="input-num-container flex">
              <div class="drop-item flex">
                <div class="txt-drop-item flex ">
                  <span class="search-area-text-Bold">Infants</span>
                  <span class="search-area-text-light"> Under 2</span>
                </div>
                <div class="input-num">
                  <button @click="--adults" class="inc-btn">-</button>
                  <span>
                    {{ adults }}
                  </span>
                  <button @click="++adults" class="inc-btn">+</button>
                </div>
              </div>
            </div>
            <div class="input-num-container flex">
              <div class="drop-item flex">
                <div class="txt-drop-item flex ">
                  <span class="search-area-text-Bold">Pets</span>
                  <span class="search-area-text-light  "> Bringing a service
                    animal?</span>
                </div>
                <div class="input-num">
                  <button @click="--adults" class="inc-btn">-</button>
                  <span>
                    {{ adults }}
                  </span>
                  <button @click="++adults" class="inc-btn">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="action-search clickable" @click.stop="setFilterBy">
          <img class="search-icon" src="/src/assets/logo/serch_icon.png"
            alt="" />
          <span>Search</span>
        </div>
      </div>
    </nav>


  </div>
</template>

<script>

export default {
  data() {
    return {
      isOpen: true,
      adults: 0,
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
      this.selectedSrchArea = 'date-from'
    },
    onOpenDateTo() {
      this.selectedSrchArea = 'date-to'
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
</style>