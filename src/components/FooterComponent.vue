<script setup lang="ts">
const currentYear = new Date().getFullYear()
const socialLinks = [
  { title: 'GitHub', link: 'https://github.com/tdittmann' },
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/timo-dittmann/' },
]
</script>

<template>
  <footer class="site-footer clearfix">
    <div class="footer-social">
      <ul class="footer-social-links">
        <li v-for="socialLink in socialLinks" :key="socialLink.title">
          <a :href="socialLink.link" target="_blank">{{ socialLink.title }}</a>
        </li>
      </ul>
    </div>

    <div class="footer-copyrights">
      <p>© {{ currentYear }} All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped></style>
