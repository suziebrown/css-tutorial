<script setup lang="ts">
import { computed, ref } from "vue";
import LightbulbIcon from "@/icons/LightbulbIcon.vue";
import TickIcon from "@/icons/TickIcon.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import ExpandableBlock from "@/components/ExpandableBlock.vue";

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
  <div class="mb-8">
    <div :style="props.targetStyle" />
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
      <CodeBlock>
        {{ displayTargetStyle }}
      </CodeBlock>
    </template>
  </ExpandableBlock>
</template>
