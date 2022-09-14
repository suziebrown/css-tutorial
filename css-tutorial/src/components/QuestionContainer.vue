<script setup lang="ts">
import { computed, ref } from "vue";
import LightbulbIcon from "@/components/icons/LightbulbIcon.vue";
import TickIcon from "@/components/icons/TickIcon.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

type Props = {
  targetStyle: string;
}
const props = defineProps<Props>();

const displayTargetStyle = computed(() => `{
  ${props.targetStyle}
}`
);

const showHint = ref(false);
const toggleHint = () => showHint.value = !showHint.value;

const showSolution = ref(false);
const toggleSolution = () => showSolution.value = !showSolution.value;
</script>

<template>
  <div class="m-4">
    <div :style="props.targetStyle" />
  </div>

  <div class="flex flex-col w-full my-4">
    <ButtonComponent @click="toggleHint">
      <template #icon>
        <LightbulbIcon />
      </template>
      <template #label>
        {{ showHint ? "Hide hint" : "Show hint" }}
      </template>
    </ButtonComponent>
    <div v-if="showHint" class="border-2 rounded border-gray-200 py-1 px-2">
      <slot name="hint" class="ml-4" />
    </div>
  </div>

  <div class="flex flex-col w-full">
    <ButtonComponent @click="toggleSolution">
      <template #icon>
        <TickIcon />
      </template>
      <template #label>
        {{ showSolution ? "Hide solution" : "Show solution" }}
      </template>
    </ButtonComponent>
    <div v-if="showSolution" class="border-2 rounded border-gray-200 py-1 px-2">
      <p class="ml-4 font-mono whitespace-pre-wrap">
        {{ displayTargetStyle }}
      </p>
    </div>
  </div>
</template>
