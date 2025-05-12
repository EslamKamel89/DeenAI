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
      <!-- Received Message -->
      <div class="flex items-start gap-3">
        <img
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

      <!-- Sent Message -->
      <div class="flex flex-row-reverse items-start gap-3">
        <div
          class="max-w-[80%] rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-slate-800 shadow-sm"
        >
          Wa Alaikum Salaam. Can you explain the significance of the 5 daily
          prayers?
          <div class="mt-1 text-right text-xs text-slate-500">11:17 AM</div>
        </div>
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white shadow"
        >
          JS
        </div>
      </div>
    </div>

    <!-- Input Field -->
    <form class="relative mt-4">
      <textarea
        rows="2"
        placeholder="Type your message..."
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
  </section>
</template>
