<script setup lang="ts">
import { computed, ref } from "vue";
import QuestionContainer from "@/features/QuestionContainer.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import { justADivSolutions } from "@/data/JustADivSolutions";
import { stylesRecordToString } from "@/helpers/renderHelpers";

const currentQuestionNumber = ref(1);
const currentQuestionSolution = computed(() => justADivSolutions[currentQuestionNumber.value]);
const currentQuestionSolutionStyles = computed(() => stylesRecordToString(currentQuestionSolution.value.styles))
</script>

<template>
  <SectionHeading title="Just a div" description="Style a single div to recreate the target content shown below." />
  <QuestionContainer :solutionStyles="currentQuestionSolutionStyles">
    <template #hint>
      <div v-html="currentQuestionSolution.hint" />
    </template>
  </QuestionContainer>
</template>