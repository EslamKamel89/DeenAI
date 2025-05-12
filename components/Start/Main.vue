<script setup lang="ts">
import { useForm } from "vee-validate";

const form = useForm({
  validationSchema: authSchema,
});
const handleSubmit = () => {
  form.validate();
  pr(form.values, "form.values");
};
</script>
<template>
  <section class="mb-8 flex flex-col items-center gap-6 text-center">
    <img
      src="/assets/bruno.svg"
      alt="Bruno"
      class="h-36 w-36 rounded-full border-4 border-emerald-200 shadow"
    />
    <h1 class="text-3xl font-bold text-emerald-900">Welcome to DeenAI</h1>
    <p class="max-w-md text-slate-600">
      Your AI companion for Islamic questions, research, and guidance.
    </p>

    <form
      @submit.prevent="handleSubmit"
      class="flex w-full max-w-sm flex-col gap-3"
    >
      <FormField name="username" v-slot="{ componentField }">
        <FormItem>
          <FormControl>
            <Input
              v-bind="componentField"
              type="text"
              placeholder="Enter your name"
              class="w-full rounded-xl border border-emerald-300 px-4 py-2 text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      </FormField>

      <small class="text-slate-500 italic"
        >So DeenAI knows who it's talking to.</small
      >
      <button
        type="submit"
        class="rounded-xl bg-emerald-600 py-2 text-white shadow transition hover:bg-emerald-700"
      >
        Start New Chat
      </button>
      <button
        type="button"
        class="rounded-xl border border-emerald-400 bg-white py-2 text-emerald-700 transition hover:bg-emerald-50"
      >
        Continue Previous Chat
      </button>
    </form>
  </section>
</template>

<style scoped>
.text-destructive-foreground {
  color: red;
}
</style>
