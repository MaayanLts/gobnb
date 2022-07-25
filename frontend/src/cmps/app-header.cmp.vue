<template>


  <div class="main-layout">
    <div class="x" style="max-width:1600px ;margin:0,auto">
      <div> <!--  :class="headerContainerStyle"-->
        <div :class="headerClass">
          <div class="left-section">
            <div class="main-header-logo">
              <router-link to="/">
                <img class="logo" src="/src/assets/logo/logo.png" alt="">
              </router-link>
            </div>
          </div> 

          <nav class="search-container" @click="showFullSearch"><!--  :style="displayInitSearch">-->
            <div class="search-area destinations">
              <span class="search-area-text">Anywhere</span>
            </div>
            <div class="vl"></div>
            <div class="search-area date">
              <span class="search-area-text">Any week</span>
            </div>
            <div class="vl"></div>
            <div class="search-area guests">
              <span class="search-area-text">Add guests</span>
              <div class="search-icon-container">
                <img class="search-icon" src="../assets/logo/serch_icon.png" alt="">
              </div>
            </div>
          </nav>

          <div class="right-section">
            <a class="clickable">Become a Host</a>
            <div class="globe-icon clickable">
              <img src="/src/assets/logo/globe-icon-header Airbnb-5.svg" alt="">
            </div>
            <div class="user-humburger clickable">
              <img class="burger-icon clickable" src="/src/assets/logo/Hamburger_icon.svg" alt="">
              <img class="user-img" src="/src/assets/logo/user.jpg" alt="">
            </div>
          </div>
        </div>

        <Transition name="fullSearch">
          <div v-if="displayFullSearch" class="dynamic-header"> <!-- :style="displayFullSearch"> -->
            <stay-filter-search  />
          </div>
        </Transition>
      </div>
      
    </div>
  </div>
</template>
<script>
import stayFilterSearch from "./stay-filter-search.cmp.vue"

export default {
  data() {
    return {
      displaySearch: false,
    }
  },
  computed: {
    // headerContainerStyle() {
    //   return (this.displaySearch === 'fullSearch') ? 'header-container full' : 'header-container'
    // },
    headerClass() {
      const isDetailsHeader = this.$route.params.id
      return (isDetailsHeader) ? 'header details-header' : 'header'
    },
    // displayInitSearch() {
    //   return this.displaySearch === 'initSearch' ? 'opacity: 1' : 'opacity: 0'
    // },
    // displayFullSearch() {
    //   return this.displaySearch === 'fullSearch' ? 'opacity: 1; display: flex;' : 'opacity: 0; display: none;'
    // }
  },
  components: {
    stayFilterSearch,
  },
  methods: {
    showFullSearch() {
      this.displaySearch = !this.displaySearch
    }
  },
}
</script>