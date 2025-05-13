<template>
  <div
    class="min-h-screen w-full bg-gradient-to-b from-green-50 via-emerald-100 to-green-200 font-sans"
  >
    <div class="flex min-h-screen items-center justify-center p-4">
      <div
        class="w-full max-w-3xl rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur-lg"
      >
        <StartMain v-if="!authState.isChatting" />
        <ChatMain v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { authState } = useAuth();
</script>
