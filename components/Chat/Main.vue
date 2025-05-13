<script setup lang="ts">
const { messages } = useChat();
onMounted(() => {
  scrollIntoView("input-form");
});
onUpdated(() => {
  scrollIntoView("input-form");
});
</script>
<template>
  <section class="flex flex-1 flex-col space-y-6 overflow-auto overflow-y-auto">
    <!-- Chat Header -->
    <div class="flex items-center gap-4 border-b border-emerald-200 pb-4">
      <img
        src="/assets/bruno.svg"
        alt="Bruno"
        class="h-12 w-12 rounded-full border-2 border-emerald-200"
      />
      <div>
        <div class="text-lg font-semibold text-emerald-900">DeenAI</div>
        <div class="text-sm text-slate-500">Islamic Knowledge Assistant</div>
      </div>
    </div>

    <!-- Chat Messages -->
    <div class="flex flex-1 flex-col gap-4 px-2">
      <template v-if="messages.length">
        <ChatBubble v-for="message in messages" :key="message.id" :message />
      </template>
      <template v-else>
        <div class="w-full text-center text-sm font-thin">
          Type Something to start conversation
        </div>
      </template>
    </div>

    <ChatMessageForm />
  </section>
</template>
