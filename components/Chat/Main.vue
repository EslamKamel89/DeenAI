<script setup lang="ts"></script>
<template>
  <section class="flex flex-col space-y-6">
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
    <div class="flex max-h-96 flex-col gap-4 overflow-y-auto px-2">
      <ChatBubble
        :is-user="false"
        message="Assalamu Alaikum! How can I assist you in your Islamic research today?"
      />
      <ChatBubble
        :is-user="true"
        message=" Wa Alaikum Salaam. Can you explain the significance of the 5 daily
          prayers?"
      />
    </div>

    <ChatMessageForm />
  </section>
</template>
