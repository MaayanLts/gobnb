<template  >


  <div @click="displaySearch = !displaySearch" class="main-layout">
    <div class="x" style="max-width:1600px ;margin:0,auto">
      <div>
        <!--  :class="headerContainerStyle"-->
        <div :class="headerClass">
          <div class="left-section">
            <div class="main-header-logo">
              <router-link to="/">
                <img class="logo" src="/src/assets/logo/logo.png" alt="">
              </router-link>
            </div>
          </div>

          <transition name="fullSearch">

            <nav v-if="!displaySearch" class="search-container"
              @click="displaySearch = !displaySearch">
              <!--  :style="displayInitSearch">-->
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
                  <img class="search-icon" src="../assets/logo/serch_icon.png"
                    alt="">
                </div>
              </div>
            </nav>
          </transition>

          <div class="right-section">
            <a class="clickable">Become a Host</a>
            <div class="globe-icon clickable">
              <img src="/src/assets/logo/globe-icon-header Airbnb-5.svg" alt="">
            </div>
            <div class="user-humburger clickable">
              <img class="burger-icon clickable"
                src="/src/assets/logo/Hamburger_icon.svg" alt="">
              <img class="user-img" src="/src/assets/logo/user.jpg" alt="">
            </div>
          </div>
        </div>

        <Transition name="fullSearch">
          <!-- <div> -->
          <!-- :style="displayFullSearch"> -->
          <stay-filter-search v-if="displaySearch" class="dynamic-header" />
          <!-- </div> -->
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
      displaySearch: false
      ,
    }
  },
  computed: {

    headerClass() {
      const isDetailsHeader = this.$route.params.id
      return (isDetailsHeader) ? 'header details-header' : 'header'
    },

  },
  components: {
    stayFilterSearch,
  },
  methods: {

  },
}
</script>