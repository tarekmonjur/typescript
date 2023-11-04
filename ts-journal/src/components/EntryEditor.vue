<script lang="ts" setup>
import EmojiField from '@/components/EmojiField.vue';
import ArrowCircleRight from '@/assets/icons/arrow-circle-right.svg';
import { ref, computed, onMounted, inject } from 'vue';
import type Emoji from './../types/Emoji';
import type IEntry from '@/types/Entry';
import { userInjectionKey } from '@/types/InjectionKeys';

const text = ref('');
const emoji = ref<Emoji | null>('cool');
const charCount = computed<number>(() => text.value.length);
const maxChars = 280;
const user = inject(userInjectionKey);

const textarea = ref<HTMLTextAreaElement | null>();

onMounted(() => textarea.value?.focus());

// defineEmits(['@update']);
const emit = defineEmits<{
  (e: '@update', entry: IEntry): void;
}>();

const handleText = (e: Event) => {
  const textarea = e.target as HTMLTextAreaElement;
  if (textarea.value.length < maxChars) {
    text.value = textarea.value;
  } else {
    text.value = textarea.value = textarea.value.substring(0, maxChars);
  }
};

const handleSubmit = () => {
  emit('@update', {
    body: text.value,
    emoji: emoji.value,
    createdAt: new Date(),
    id: 0,
  });
  text.value = '';
  emoji.value = null;
};
</script>
<template>
  <!-- <form
    class="entry-form"
    @submit.prevent="
      $emit('@update', {
        body: text,
        emoji,
        createdAt: new Date(),
        id: 0,
      })
    "
    @submit.prevent="handleSubmit"
  > -->
  <form class="entry-form" @submit.prevent="handleSubmit">
    <textarea
      :value="text"
      ref="textarea"
      @keyup="handleText"
      :placeholder="`New Journal Entry for ${user?.name}`"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxChars }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
