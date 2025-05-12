<template>
  <div class="h-full w-full relative overflow-x-hidden">
    <div class="absolute inset-x-0 inset-y-0">
      <img src="/assets/bg.png" class="w-full h-full bg-cover" alt="" />
    </div>
    <div class="">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
