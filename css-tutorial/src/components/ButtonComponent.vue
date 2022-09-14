<script setup lang="ts">
type ButtonVariant = "primary" | "link";

type Props = {
  label: string;
  disabled?: boolean;
  variant?: ButtonVariant;
}
const props = withDefaults(defineProps<Props>(), {
  variant: "link"
});

type Emits = {
  (e: "click"): void;
};
defineEmits<Emits>();

const classesByButtonVariant: Record<ButtonVariant, string> = {
  primary: "px-2 py-1 rounded text-white",
  link: ""
};
const activeClassesByButtonVariant: Record<ButtonVariant, string> = {
  primary: "bg-pink-900 hover:bg-pink-700",
  link: "text-pink-900 hover:text-pink-700"
};
const disabledClassesByButtonVariant: Record<ButtonVariant, string> = {
  primary: "bg-gray-500",
  link: "text-gray-500"
};
</script>

<template>
  <button @click="$emit('click')" :disabled="props.disabled">
    <span
      class="flex items-center"
      :class="[
        classesByButtonVariant[props.variant],
        { 'cursor-not-allowed' : props.disabled },
        props.disabled ? disabledClassesByButtonVariant[props.variant] : activeClassesByButtonVariant[props.variant],
      ]">
      <span v-if="$slots.icon != null" class="svg-fit w-3 mr-2">
        <slot name="icon" />
      </span>
      {{ props.label }}
    </span>
  </button>
</template>
