<script setup lang="ts">
import { computed } from "vue";
import LightbulbIcon from "@/icons/LightbulbIcon.vue";
import TickIcon from "@/icons/TickIcon.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import ExpandableBlock from "@/components/ExpandableBlock.vue";

type Props = {
  solutionStyles: string;
}
const props = defineProps<Props>();

const solutionCode = computed(() => `{
  ${props.solutionStyles}
}`
);
</script>

<template>
  <div class="mb-8">
    <div :style="props.solutionStyles" />
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
        {{ solutionCode }}
      </CodeBlock>
    </template>
  </ExpandableBlock>
</template>
