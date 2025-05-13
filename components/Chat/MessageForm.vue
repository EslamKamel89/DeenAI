<script setup lang="ts">
import { Send } from "lucide-vue-next";

const { addMessage } = useChat();
const message = ref("");
const handleSubmit = () => {
  if (message.value.trim()) {
    addMessage({
      isUser: true,
      username: useAuth().authState.value.username,
      content: message.value,
    });
    message.value = "";
  }
};
</script>
<template>
  <form class="relative mt-4" @submit.prevent="handleSubmit">
    <textarea
      rows="2"
      placeholder="Type your message..."
      v-model="message"
      class="w-full resize-none rounded-2xl border border-emerald-300 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
    ></textarea>
    <Button
      type="submit"
      class="absolute right-3 bottom-3 h-12 w-12 rounded-full text-white shadow transition"
    >
      <Send class="h-7 w-7" />
    </Button>
  </form>
</template>
