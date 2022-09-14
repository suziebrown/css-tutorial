<script setup lang="ts">
import SectionTitle from "./SectionTitle.vue";
import QuestionContainer from "./QuestionContainer.vue";
import InlineCode from "@/components/InlineCode.vue";

const targetClass1 =
  `width: 40px;
  height: 40px;
  background-color: #000000;`;
</script>

<template>
  <SectionTitle>Just a div</SectionTitle>
  Style a single div to recreate the target content shown below.
  <QuestionContainer :targetStyle="targetClass1">
    <template #hint>
      Try using the CSS tags <InlineCode>width</InlineCode> and <InlineCode>height</InlineCode>
    </template>
  </QuestionContainer>
</template>