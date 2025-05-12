<template>
  <div
    class="min-h-screen w-full bg-gradient-to-b from-green-50 via-emerald-100 to-green-200 font-sans"
  >
    <div class="flex items-center justify-center min-h-screen p-4">
      <div
        class="w-full max-w-3xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6"
      >
        <!-- Start Screen -->
        <section class="flex flex-col items-center gap-6 text-center mb-8">
          <img
            src="/assets/bruno.svg"
            alt="Bruno"
            class="w-36 h-36 rounded-full shadow border-4 border-emerald-200"
          />
          <h1 class="text-3xl font-bold text-emerald-900">Welcome to DeenAI</h1>
          <p class="text-slate-600 max-w-md">
            Your AI companion for Islamic questions, research, and guidance.
          </p>

          <form class="flex flex-col gap-3 w-full max-w-sm">
            <input
              type="text"
              placeholder="Enter your name"
              class="w-full px-4 py-2 text-sm border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400"
            />
            <small class="text-slate-500 italic"
              >So DeenAI knows who it's talking to.</small
            >
            <button
              type="submit"
              class="bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl transition shadow"
            >
              Start New Chat
            </button>
            <button
              type="button"
              class="bg-white border border-emerald-400 text-emerald-700 py-2 rounded-xl hover:bg-emerald-50 transition"
            >
              Continue Previous Chat
            </button>
          </form>
        </section>

        <!-- Chat Screen -->
        <section class="flex flex-col space-y-6">
          <!-- Chat Header -->
          <div class="flex items-center gap-4 pb-4 border-b border-emerald-200">
            <img
              src="/assets/bruno.svg"
              alt="Bruno"
              class="w-12 h-12 rounded-full border-2 border-emerald-200"
            />
            <div>
              <div class="text-lg font-semibold text-emerald-900">DeenAI</div>
              <div class="text-sm text-slate-500">
                Islamic Knowledge Assistant
              </div>
            </div>
          </div>

          <!-- Chat Messages -->
          <div class="flex flex-col gap-4 overflow-y-auto max-h-96 px-2">
            <!-- Received Message -->
            <div class="flex items-start gap-3">
              <img
                src="/assets/bruno.svg"
                class="w-10 h-10 rounded-full border-2 border-emerald-100"
              />
              <div
                class="bg-emerald-100 text-slate-800 px-4 py-3 rounded-2xl shadow-sm max-w-[80%]"
              >
                Assalamu Alaikum! How can I assist you in your Islamic research
                today?
                <div class="text-xs text-right text-slate-500 mt-1">
                  11:15 AM
                </div>
              </div>
            </div>

            <!-- Sent Message -->
            <div class="flex flex-row-reverse items-start gap-3">
              <div
                class="bg-white border border-emerald-200 text-slate-800 px-4 py-3 rounded-2xl shadow-sm max-w-[80%]"
              >
                Wa Alaikum Salaam. Can you explain the significance of the 5
                daily prayers?
                <div class="text-xs text-right text-slate-500 mt-1">
                  11:17 AM
                </div>
              </div>
              <div
                class="flex items-center justify-center bg-emerald-500 text-white font-bold w-10 h-10 rounded-full shadow"
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
              class="w-full px-4 py-3 text-sm border border-emerald-300 rounded-2xl shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400"
            ></textarea>
            <button
              type="submit"
              class="absolute bottom-3 right-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3 shadow transition"
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
