<script setup lang="ts">
import ExperienceComponent from '@/components/ExperienceComponent.vue'
import { useI18n } from 'vue-i18n'
import CertificateComponent from '@/components/CertificateComponent.vue'

const { t } = useI18n()
</script>

<template>
  <div class="page-content site-content single-post" role="main">
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <div class="home-content">
          <div class="row flex-v-align">
            <div class="col-sm-12 col-md-5 col-lg-5">
              <div class="home-photo">
                <div class="hp-inner" style="background-image: url(./img/personal_photo.jpg)"></div>
              </div>
            </div>

            <div class="col-sm-12 col-md-7 col-lg-7">
              <div class="home-text hp-left">
                <h1>{{ t('home.title') }}</h1>
                <p>{{ t('home.aboutMe') }}</p>
              </div>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-xs-12 col-sm-6">
              <div class="block-title">
                <h2>{{ t('home.experience.title') }}</h2>
              </div>

              <div class="timeline clearfix">
                <ExperienceComponent
                  :period="t('home.experience.3.dateRange')"
                  :title="t('home.experience.3.title')"
                  :company="t('home.experience.3.company')"
                  :description="t('home.experience.3.description')"
                />

                <ExperienceComponent
                  :period="t('home.experience.2.dateRange')"
                  :title="t('home.experience.2.title')"
                  :company="t('home.experience.2.company')"
                  :description="t('home.experience.2.description')"
                />

                <ExperienceComponent
                  :period="t('home.experience.1.dateRange')"
                  :title="t('home.experience.1.title')"
                  :company="t('home.experience.1.company')"
                  :description="t('home.experience.1.description')"
                />

                <ExperienceComponent
                  :period="t('home.experience.0.dateRange')"
                  :title="t('home.experience.0.title')"
                  :company="t('home.experience.0.company')"
                  :description="t('home.experience.0.description')"
                />
              </div>
            </div>

            <div class="col-xs-12 col-sm-6">
              <div class="block-title">
                <h2>{{ t('home.certificates.title') }}</h2>
              </div>

              <CertificateComponent
                image="./img/certificates/oca.png"
                name="Oracle Certified Associate - Java SE Programmer"
                year="2018"
              />

              <CertificateComponent
                image="./img/certificates/ocp.png"
                name="Oracle Certified Professional - Java SE Programmer"
                year="2020"
              />

              <CertificateComponent
                image="./img/certificates/kubernetes.png"
                name="Kubernetes for Application Developer"
                year="2020"
              />

              <CertificateComponent
                image="./img/certificates/isaqb-foundation.png"
                name="iSAQB Certified Professional for Software Architecture - Foundation Level"
                year="2021"
              />

              <CertificateComponent
                image="./img/certificates/isaqb-advanced.png"
                name="iSAQB Certified Professional for Software Architecture - Advanced Level"
                year="2023"
              />

              <CertificateComponent
                image="./img/certificates/go.png"
                name="Go Fundamentals"
                year="2024"
              />

              <CertificateComponent
                image="./img/certificates/vue.png"
                name="Vue.js Fundamentals"
                year="2024"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
