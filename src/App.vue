<script setup>
import ButtonCart from './components/ButtonCart.vue';
</script>

<template>
  <nav class="flex flex-row gap-4 items-center p-7 bg-gray-100 border-b-2 border-gray-200">
    <RouterLink class="hover:underline" to="/admin">Admin</RouterLink>
    <RouterLink class="hover:underline" to="/">Tickets</RouterLink>
    <ButtonCart />
  </nav>
  <main class="mx-auto p-4">
    <RouterView />
  </main>
</template>

