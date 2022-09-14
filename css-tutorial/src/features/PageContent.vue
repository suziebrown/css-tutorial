<script setup lang="ts">
import { computed, ref } from "vue";
import QuestionContainer from "@/features/QuestionContainer.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import { justADivSolutions } from "@/data/JustADivSolutions";

const currentQuestionNumber = ref(1);
const currentQuestionSolution = computed(() => justADivSolutions[currentQuestionNumber.value]);
</script>

<template>
  <SectionHeading title="Just a div" description="Style a single div to recreate the target content shown below." />
  <QuestionContainer :targetStyle="currentQuestionSolution.solution">
    <template #hint>
      <div v-html="currentQuestionSolution.hint" />
    </template>
  </QuestionContainer>
</template>