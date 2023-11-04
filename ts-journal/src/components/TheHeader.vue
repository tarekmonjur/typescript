<script setup lang="ts">
import FileNotesIcon from '@/assets/icons/file-notes.svg';
import { userInjectionKey } from '@/types/InjectionKeys';
import { inject } from 'vue';
const user = inject(userInjectionKey);
</script>
<template>
  <h1 class="text-6xl flex items-center">
    <FileNotesIcon width="80" class="mr-5" />
    <strong> {{ user?.name }} Journal</strong>
  </h1>
</template>
