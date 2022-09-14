<script setup lang="ts">
type Emits = {
  (e: 'click'): void;
};
defineEmits<Emits>();
</script>

<template>
  <button @click="$emit('click')">
    <span class="flex items-center text-pink-900">
      <span v-if="$slots.icon != null" class="svg-fit w-3 mr-2">
        <slot name="icon" />
      </span>
      <slot name="label" />
    </span>
  </button>
</template>
