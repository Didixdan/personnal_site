<template>
  <header>
    <div class="header-tab">
      <a href="#" class="title-logo" title="Page d'accueil du site" rel="home">
        <img v-if="!themeModeChecked" src="@/assets/images/logo.png" alt="Logo de Alexandre VARIN" />
        <img v-else src="@/assets/images/logo_red.png" alt="Logo de Alexandre VARIN" />
        <h1>Dev DevOps</h1>
      </a>

      <div class="btn-menu" @click="triggerMobileMenu">
        <font-awesome-icon icon="bars" />
      </div>

      <nav class="site-navigation" :class="{ 'mobile-navigation': isMobile, 'active-menu': showMobileMenu }" role="navigation">
        <div class="btn-close-menu" :class="{ 'active-close-menu': showMobileMenu }" @click="triggerMobileMenu">
          <font-awesome-icon icon="times" />
        </div>

        <div id="primary-menu" class="menu">
          <ul>
            <li class="menu-item">
              <a :href="'https://www.alexandre-varin.fr/'" aria-current="page"> PRÉSENTATION </a>
            </li>
            <li class="menu-item">
              <a :href="'https://www.cv.alexandre-varin.fr/'" aria-current="page"> CURRICULLUM VITAE </a>
            </li>
          </ul>
        </div>
      </nav>

      <label class="darkMode">
        <input v-model="themeModeChecked" type="checkbox" @click="triggerDarkMode" />
        <span class="slider round"></span>
      </label>
    </div>

    <p class="random-sentence" title="Citation aléatoire" @click="setRandomSentence">« {{ randomSentence }} »</p>
  </header>
</template>

<script src="./script.js"></script>
