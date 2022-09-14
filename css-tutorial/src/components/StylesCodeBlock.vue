<template>
  <p class="font-mono whitespace-pre-wrap text-gray-400">
    {{ "{\n "}}
    <slot />
    {{ "\n}" }}
  </p>
</template>
