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
const currentSolution = computed(() => justADivSolutions[currentQuestionNumber.value]);
const currentSolutionOldStyles = computed(() => currentSolution.value.oldStyles ? stylesRecordToString(currentSolution.value.oldStyles) : null)
const currentSolutionNewStyles = computed(() => stylesRecordToString(currentSolution.value.newStyles))

const handleBack = () => currentQuestionNumber.value = currentQuestionNumber.value - 1;
const handleNext = () => currentQuestionNumber.value = currentQuestionNumber.value + 1;
</script>

<template>
  <SectionHeading title="Just a div" description="Style a single div to recreate the target content shown below." />

  <QuestionContainer :solution-old-styles="currentSolutionOldStyles" :solution-new-styles="currentSolutionNewStyles">
    <template #hint>
      <div v-html="currentSolution.hint" />
    </template>
  </QuestionContainer>

  <div class="w-full mt-12 flex justify-between">
    <ButtonComponent label="Back" @click="handleBack" :disabled="currentQuestionNumber === firstQuestionNumber" variant="primary" />
    <ButtonComponent label="Next" @click="handleNext" :disabled="currentQuestionNumber === lastQuestionNumber" variant="primary" />
  </div>
</template>