<script setup lang="ts">
type Props = {
  period: string
  company: string
  title: string
  description: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="timeline-item clearfix">
    <h5 class="item-period current">{{ props.period }}</h5>
    <span class="item-company">{{ props.company }}</span>
    <h4 class="item-title">{{ props.title }}</h4>
    <p>{{ props.description }}</p>
  </div>
</template>

<style scoped></style>
