<script setup lang="ts">
const porps = defineProps<{
  isUser: boolean;
  message: string;
}>();
const { username } = toRefs(useAuth().authState.value);
</script>
<template>
  <div class="flex items-start gap-3">
    <img
      v-if="!isUser"
      src="/assets/bruno.svg"
      class="h-10 w-10 rounded-full border-2 border-emerald-100"
    />

    <div
      class="max-w-[80%] rounded-2xl bg-emerald-100 px-4 py-3 text-slate-800 shadow-sm"
    >
      Assalamu Alaikum! How can I assist you in your Islamic research today?
      <div class="mt-1 text-right text-xs text-slate-500">11:15 AM</div>
    </div>
  </div>
</template>
