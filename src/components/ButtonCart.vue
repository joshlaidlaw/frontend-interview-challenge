<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cartStore'

const store = useCartStore()
const { itemsInCart } = storeToRefs(store)
</script>

<template>
  <RouterLink
    to="/cart"
    class="ml-auto p-2 flex border rounded-full bg-blue-500 p-2 my-auto font-bold text-white text-xs hover:bg-blue-700 disabled:bg-blue-100 disabled:cursor-not-allowed"
  >
    <div v-if="itemsInCart !== 0" class="bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center">
      {{ itemsInCart }}
    </div>
    <span class="px-2">Cart</span>
  </RouterLink>
</template>
