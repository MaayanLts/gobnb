<template>

  <div :class="headerContainerStyle">
    <div :class="headerClass">
      <div class="left-section">
        <div class="main-header-logo">
          <router-link to="/">
            <img class="logo" src="/src/assets/logo/logo.png" alt="">
          </router-link>
        </div>
      </div>

      <nav class="main-header-nav middle-section" @click="showFullSearch"
        :style="displayInitSearch">
        <ul class="main-nav clean-list flex">
          <li class="li-header"><a href="#">Anywhere</a></li>
          <li class="li-header"><a href="#">Anyweek</a></li>
          <li class="li-header"><a href="#">Add gust</a>
            <div class="search-icon-container">
              <img class="search-icon" src="../assets/logo/serch_icon.png"
                alt="">
            </div>
          </li>

        </ul>
      </nav>

      <div class="right-section">
        <a>Become a Host</a>
        <img class="globe-icon" src="/src/assets/logo/Globe_icon.svg" alt="">
        <div class="user-humburger">
          <img class="burger-icon" src="/src/assets/logo/Hamburger_icon.svg"
            alt="">
          <img class="user-img" src="/src/assets/logo/user.jpg" alt="">
        </div>
      </div>

    </div>
    <div class="dynamic-header" :style="displayFullSearch">
      <stay-filter-search />
    </div>
  </div>

</template>
<script>
import stayFilterSearch from "./stay-filter-search.cmp.vue"

export default {
  data() {
    return {
      displaySearch: 'initSearch',
    }
  },
  computed: {
    headerContainerStyle() {
      return (this.displaySearch === 'fullSearch') ? 'header-container full' : 'header-container'
    },
    headerClass() {
      const isDetailsHeader = this.$route.params.id
      return (isDetailsHeader) ? 'header details-header' : 'header'
    },
    displayInitSearch() {
      return this.displaySearch === 'initSearch' ? 'opacity: 1' : 'opacity: 0'
    },
    displayFullSearch() {
      return this.displaySearch === 'fullSearch' ? 'opacity: 1; display: flex;' : 'opacity: 0; display: none;'
    }
  },
  components: {
    stayFilterSearch,
  },
  methods: {
    showFullSearch() {
      this.displaySearch = 'fullSearch'
    }
  },
}
</script>