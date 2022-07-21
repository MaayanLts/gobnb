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
            <div class="search-icon-container">
              <img class="search-icon" src="../assets/logo/serch_icon.png"
                alt="">
              <!-- <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true" role="presentation" focusable="false"
                style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                <g fill="none">
                  <path
                    d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                  </path>
                </g>
              </svg> -->
            </div>

          </li>

        </ul>
      </nav>
    </div>


    <div class="right-section">

      <a>swith to hosting</a>
      <img class="globe-icon" src="/src/assets/logo/Globe_icon.svg" alt="">
      <div class="user-humburger">
        <img class="burger-icon" src="/src/assets/logo/Hamburger_icon.svg"
          alt="">
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