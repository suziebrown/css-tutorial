<script setup lang="ts">
import { computed, ref } from "vue";
import QuestionContainer from "@/features/QuestionContainer.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import { justADivSolutions } from "@/data/JustADivSolutions";
import { stylesRecordToString } from "@/helpers/renderHelpers";
import ButtonComponent from "@/components/ButtonComponent.vue";

const firstQuestionNumber = 1;
const lastQuestionNumber = computed(() => Math.max(...Object.keys(justADivSolutions).map(key => (Number(key)))));

const currentQuestionNumber = ref(1);

// qq handle non-existent Record entry
const currentQuestionSolution = computed(() => justADivSolutions[currentQuestionNumber.value]);
const currentQuestionSolutionStyles = computed(() => stylesRecordToString(currentQuestionSolution.value.styles))

const handleBack = () => currentQuestionNumber.value = currentQuestionNumber.value - 1;
const handleNext = () => currentQuestionNumber.value = currentQuestionNumber.value + 1;
</script>

<template>
  <SectionHeading title="Just a div" description="Style a single div to recreate the target content shown below." />

  <QuestionContainer :solutionStyles="currentQuestionSolutionStyles">
    <template #hint>
      <div v-html="currentQuestionSolution.hint" />
    </template>
  </QuestionContainer>

  <div class="w-full mt-12 flex justify-between">
    <ButtonComponent label="Back" @click="handleBack" :disabled="currentQuestionNumber === firstQuestionNumber" variant="primary" />
    <ButtonComponent label="Next" @click="handleNext" :disabled="currentQuestionNumber === lastQuestionNumber" variant="primary" />
  </div>
</template>