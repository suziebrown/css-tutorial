<script setup lang="ts">
import FooterLink from "@/components/FooterLink.vue";
import PageContent from "./PageContent.vue";
</script>

<template>
  <div class="h-screen w-full flex flex-col bg-grey-100">
    <header
      class="h-24 w-full flex justify-center items-center bg-pink-900 text-white"
    >
      <h1 class="text-3xl font-bold">Ready to learn some cool tricks?</h1>
    </header>
    <main class="h-full overflow-y-scroll flex justify-center">
      <div class="w-600">
        <PageContent />
      </div>
    </main>
    <footer>
      <div
        class="h-12 w-full flex justify-center items-center bg-gray-500 text-white"
      >
        <div class="w-600 flex justify-center items-center">
          <FooterLink to="https://tailwindcomponents.com/cheatsheet/">tailwind cheatsheet</FooterLink>
          <FooterLink to="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">flexbox cheatsheet</FooterLink>
        </div>
      </div>
    </footer>
  </div>
</template>
