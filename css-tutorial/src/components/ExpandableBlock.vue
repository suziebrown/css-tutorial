<script setup lang="ts">
import { ref } from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

type Props = {
  labelIfShown: string;
  labelIfHidden: string;
}
const props = defineProps<Props>();

const isShown = ref(false);
const toggleIsShown = () => isShown.value = !isShown.value;
</script>

<template>
  <div class="flex flex-col w-full my-2">
    <ButtonComponent @click="toggleIsShown">
      <template #icon>
        <slot name="icon" />
      </template>
      <template #label>
        {{ isShown ? props.labelIfShown : props.labelIfHidden }}
      </template>
    </ButtonComponent>
    <div v-if="isShown" class="border-2 rounded border-gray-200 py-1 px-2">
      <slot name="hiddenContent" class="ml-4" />
    </div>
  </div>
</template>
