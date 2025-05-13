<template>
  <div
    class="flex min-h-screen w-full flex-col bg-gradient-to-b from-green-50 via-emerald-100 to-green-200 font-sans"
  >
    <div
      class="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur-lg"
    >
      <div class="flex w-full flex-1 flex-col">
        <StartMain v-if="!authState.isChatting" />
        <ChatMain v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { authState } = useAuth();
</script>
