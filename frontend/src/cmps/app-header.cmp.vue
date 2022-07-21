<template>

  <!-- <header class="main-header">

    <div class="main-header-logo">
      <router-link to="/">
        <img src="/src/assets/logo/logo.png" alt="">
      </router-link>
    </div>

    <nav class="main-header-nav">
      <ul class="main-nav clean-list flex">
        <li><a href="#">Anywhere</a></li>
        <li><a href="#">Anyweek</a></li>
        <li><a href="#">add gust</a></li>
      </ul>
      <button class="main-header-search ">
        <img src="/src/assets/logo/serch.png" alt="">
      </button>
    </nav>
    <div class="main-header-user">
      <button>swith to hosting</button>
      <button></button>

    </div>

  </header> -->

  <div class="header">
    <div class="left-section">
      <div class="main-header-logo">
        <router-link to="/">
          <img class="logo" src="/src/assets/logo/logo.png" alt="">
        </router-link>
      </div>
    </div>

    <div class="middle-section">
      <nav class="main-header-nav">
        <ul class="main-nav clean-list flex">
          <li class="li-header"><a href="#">Anywhere</a></li>
          <li class="li-header"><a href="#">Anyweek</a></li>
          <li class="li-header"><a href="#">add gust</a>
            <img class="search-icon" src="/src/assets/logo/serch.png" alt="">
          </li>

        </ul>
      </nav>
    </div>


    <div class="right-section">

      <a>swith to hosting</a>
      <img class="globe-icon" src="/src/assets/logo/Globe_icon.svg" alt="">
      <div class="user-humburger">
        <i>≡</i>
        <img class="user-img" src="/src/assets/logo/user.jpg" alt="">
      </div>
    </div>
  </div>

</template>
<script>
export default {
  computed: {

  }
}
</script>