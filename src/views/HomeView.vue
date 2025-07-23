<script setup lang="ts"></script>

<template>
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
              <h1>{{ $t('home.title') }}</h1>
              <p>{{ $t('home.aboutMe') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
