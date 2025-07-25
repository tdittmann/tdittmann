<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <div class="lm-animated-bg"></div>

  <!-- Scroll To Top Button -->
  <div class="lmpixels-scroll-to-top"><i class="lnr lnr-chevron-up" /></div>
  <!-- /Scroll To Top Button -->

  <div class="page-scroll">
    <div
      id="page_container"
      class="page-container bg-move-effect"
      data-animation="transition-flip-in-right"
    >
      <HeaderComponent />

      <div id="main" class="site-main">
        <div id="main-content" class="single-page-content">
          <div id="primary" class="content-area">
            <RouterView />
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  </div>
</template>

<style scoped></style>
