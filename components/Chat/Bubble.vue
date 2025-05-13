<script setup lang="ts">
const porps = defineProps<{
  isUser: boolean;
  message: string;
}>();
const { username } = toRefs(useAuth().authState.value);
</script>
<template>
  <div
    class="flex items-start gap-3"
    :class="{
      'flex-row-reverse': isUser,
    }"
  >
    <img
      v-if="!isUser"
      src="/assets/bruno.svg"
      class="h-10 w-10 rounded-full border-2 border-emerald-100"
    />
    <div v-else class="h-10 w-10 rounded-full border-2 border-emerald-100">
      {{ getUserNameInitials(username) }}
    </div>
    <div
      class="max-w-[80%] rounded-2xl px-4 py-3 shadow-sm"
      :class="{
        'border-emerald-200 bg-white text-slate-800': isUser,
        'bg-emerald-100 text-slate-800': !isUser,
      }"
    >
      {{ message }}
      <div class="mt-1 text-right text-xs text-slate-500">11:15 AM</div>
    </div>
  </div>
</template>
