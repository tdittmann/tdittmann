<script setup lang="ts"></script>

<template>
  <div class="mobile-menu-hide language-selection">
    <span @click="$i18n.locale = 'de'">🇩🇪</span>
    <span @click="$i18n.locale = 'en'">🇬🇧</span>
  </div>

  <header id="site_header" class="header">
    <div class="header-content clearfix">
      <!-- Text Logo -->
      <div class="text-logo">
        <RouterLink to="/">
          <div class="logo-symbol" style="background-color: transparent">
            <img src="/logo.svg" alt="Logo" style="width: 55px" />
          </div>
          <div class="logo-text"><span>Timo</span> Dittmann</div>
        </RouterLink>
      </div>
      <!-- /Text Logo -->

      <!-- Navigation -->
      <div class="site-nav mobile-menu-hide">
        <ul class="leven-classic-menu site-main-menu">
          <!--          <li class="menu-item menu-item-has-children current-menu-item">-->

          <li class="menu-item">
            <RouterLink to="/" :activeClass="'current-menu-item'">{{
              $t('home.navigation')
            }}</RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink to="/projects" :activeClass="'current-menu-item'">{{
              $t('projects.navigation')
            }}</RouterLink>
          </li>
        </ul>
      </div>

      <a class="menu-toggle mobile-visible">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </header>
</template>

<style scoped>
.language-selection {
  position: absolute;
  top: 16px;
  right: 41px;
}

.language-selection span {
  font-size: 30px;
  cursor: pointer;
  padding-left: 4px;
  padding-right: 4px;
}
</style>
