<script setup lang="ts">
import { computed } from "vue";
import LightbulbIcon from "@/icons/LightbulbIcon.vue";
import TickIcon from "@/icons/TickIcon.vue";
import StylesCodeBlock from "@/components/StylesCodeBlock.vue";
import ExpandableBlock from "@/components/ExpandableBlock.vue";

type Props = {
  solutionOldStyles: string | undefined;
  solutionNewStyles: string;
}
const props = defineProps<Props>();

const styles = computed(() => props.solutionNewStyles + (props.solutionOldStyles ?? ''))
</script>

<template>
  <div class="mb-8">
    <div :style="styles" />
  </div>

  <ExpandableBlock label-if-hidden="Show hint" label-if-shown="Hide hint">
    <template #icon>
      <LightbulbIcon />
    </template>
    <template #hiddenContent>
      <slot name="hint" class="ml-4" />
    </template>
  </ExpandableBlock>

  <ExpandableBlock label-if-hidden="Show solution" label-if-shown="Hide solution">
    <template #icon>
      <TickIcon />
    </template>
    <template #hiddenContent>
      <StylesCodeBlock>
        <span class="text-gray-600">{{ props.solutionNewStyles }}</span>
        <span v-if="props.solutionOldStyles" class="text-gray-400">{{ "\n  " + props.solutionOldStyles }}</span>
      </StylesCodeBlock>
    </template>
  </ExpandableBlock>
</template>
