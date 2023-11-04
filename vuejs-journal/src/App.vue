<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import EntryEditor from './components/EntryEditor.vue';
import EntryCard from '@/components/EntryCard.vue';
import { provide, reactive } from 'vue';
import type IUser from './types/User';
import type IEntry from './types/Entry';
import { userInjectionKey } from './types/InjectionKeys';

const entries: IEntry[] = reactive([]);
const user: IUser = reactive({
  id: 1,
  name: 'Tarek Monjur',
  settings: [],
});
provide(userInjectionKey, user);

const handleUpdateEntry = (entry: IEntry) => {
  console.log(entry);
  entries.unshift(entry);
};

console.log(user.name);
</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @@update="handleUpdateEntry" />
    <ul>
      <li v-for="(entry, key) in entries" :key="key">
        <EntryCard :entry="entry" />
      </li>
    </ul>
  </main>
</template>
