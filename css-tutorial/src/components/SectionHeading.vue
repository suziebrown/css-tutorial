<script setup lang="ts">
type Props = {
  title: string;
  description: string | null;
}
const props = defineProps<Props>();
</script>

<template>
  <h2 class="mt-4 text-2xl font-bold">
    {{ props.title }}
  </h2>
  <p class="mb-8">
    {{ props.description }}
  </p>
</template>
