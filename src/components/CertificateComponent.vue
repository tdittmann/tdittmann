<script setup lang="ts">
type Props = {
  image: string
  name: string
  year: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="certificate-item clearfix">
    <div class="certi-logo">
      <img :src="props.image" :alt="props.name" />
    </div>

    <div class="certi-content">
      <div class="certi-date">
        <span>{{ props.year }}</span>
      </div>

      <div class="certi-title">
        <h4>{{ props.name }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
