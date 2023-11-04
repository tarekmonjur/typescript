<script lang="ts" setup>
import type IEntry from '@/types/Entry';
import DateDisplay from './DateDisplay.vue';
import UseEmojis from '@/composables/UseEmojis';
import { userInjectionKey } from '@/types/InjectionKeys';
import { inject } from 'vue';

const { findEmoji } = UseEmojis();
defineProps<{ entry: IEntry }>();

const user = inject(userInjectionKey);
</script>
<template>
  <div class="entry-card">
    <div class="entry-card-body">
      <component width="75" :is="findEmoji(entry.emoji)"></component>
      <div class="entry-text">{{ entry.body }}</div>
    </div>
    <div class="entry-footer">
      <DateDisplay :date="entry.createdAt || new Date()" class="mr-2" />
      |
      <span class="ml-2">{{ user?.name }}</span>
    </div>
  </div>
</template>
