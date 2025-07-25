<script setup lang="ts">
import { PROJECTS } from '@/stores/projects.ts'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="page-title">
    <h1>{{ t('projects.title') }}</h1>
    <div class="page-subtitle">
      <h4>{{ t('projects.subtitle') }}</h4>
    </div>
  </div>

  <div id="content" class="page-content site-content single-post" role="main">
    <div class="portfolio-grid three-columns shuffle">
      <template v-for="project in PROJECTS" :key="project.id">
        <figure class="item standard">
          <div class="portfolio-item-img">
            <img :src="project.images[0]" :alt="project.title" />
          </div>

          <h4 class="name">{{ project.title }}</h4>
          <span class="subtitle">{{ project.year }}</span>

          <span class="technology mobile-hidden">
            <span class="tag" v-for="technologie in project.technologies" :key="technologie">
              {{ technologie }}
            </span>
          </span>

          <a v-if="project.link" :href="project.link" target="_blank"><i class="fa fa-link"></i></a>
        </figure>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
