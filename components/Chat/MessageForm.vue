<script setup lang="ts">
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
    <button
      type="submit"
      class="absolute right-3 bottom-3 rounded-full bg-emerald-600 p-3 text-white shadow transition hover:bg-emerald-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M22 2L11 13"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M22 2L15 22L11 13L2 9L22 2Z"
        />
      </svg>
    </button>
  </form>
</template>
