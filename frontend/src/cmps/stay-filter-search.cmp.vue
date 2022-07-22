
<template>
      <nav class="main-header-nav middle-section">
      <ul class="main-nav clean-list flex">
        <li class="li-header" @click="onOpenWhere"><a href="#">Anywhere</a></li>
        <li class="li-header" @click="onOpenWhen"><a href="#">Anyweek</a></li>
        <li class="li-header"  @click="onOpenGuests"><a href="#">Add gust</a>
          <div class="search-icon-container">
            <img class="search-icon" src="../assets/logo/serch_icon.png" alt="">
          </div>
        </li>
      </ul>
    </nav>
</template>

<script>

export default {
  data() {
    return {}
  },
  created() { },
  methods: {},
  computed: {},
  unmounted() { },
}


</script>

<style >
</style>