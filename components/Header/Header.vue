<template>
  <header class="sticky top-0">
    <div class="header-tab">
      <a href="#" class="title-logo" rel="home">
        <img src="@/assets/images/logo.png" alt="Logo de Alexandre VARIN" width="80" height="80" />
        <h1>Alexandre - Développeur DevOps</h1>
      </a>

      <div class="btn-menu">
        <i class="icon-menu fa fa-bars text-white"></i>
      </div>

      <nav class="site-navigation" role="navigation">
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

        <div class="btn-close-menu">
          <i class="fa fa-times"></i>
        </div>
      </nav>
    </div>

    <p class="random-sentence">Random sentence</p>
  </header>
</template>

<script src="./script.js"></script>
