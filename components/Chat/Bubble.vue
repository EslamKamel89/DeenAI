<script setup lang="ts">
import type { MessageState } from "~/types";

const porps = defineProps<{
  message: MessageState;
}>();
const { username } = toRefs(useAuth().authState.value);
</script>
<template>
  <div
    class="flex items-start gap-3"
    :class="{
      'flex-row-reverse': message.isUser,
    }"
  >
    <img
      v-if="!message.isUser"
      src="/assets/bruno.svg"
      class="h-10 w-10 rounded-full border-2 border-emerald-100"
    />
    <div
      v-else
      class="bg-primary flex h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-100 text-white"
    >
      <div>{{ getUserNameInitials(username) }}</div>
    </div>
    <div
      class="max-w-[80%] rounded-2xl px-4 py-3 shadow-sm"
      :class="{
        'border-emerald-200 bg-white text-slate-800': message.isUser,
        'bg-emerald-100 text-slate-800': !message.isUser,
      }"
    >
      {{ message.content }}
      <div class="mt-1 text-right text-xs text-slate-500">
        {{ message.createdAt }}
      </div>
    </div>
  </div>
</template>
