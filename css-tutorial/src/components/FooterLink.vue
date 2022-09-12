<script setup lang="ts">
type Props = {
  to: string;
};
const props = defineProps<Props>();
</script>

<template>
  <a :href="props.to" class="px-8"><slot /></a>
</template>
