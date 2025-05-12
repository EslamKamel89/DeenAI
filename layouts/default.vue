<template>
  <div class="relative min-h-screen w-full overflow-x-hidden">
    <div class="fixed inset-0">
      <img src="/assets/bg.png" class="h-full w-full object-cover" alt="" />
    </div>
    <div class="">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
}
</style>
