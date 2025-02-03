<script setup>
import { inject } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cartStore';

const ticket = inject('ticket');
const store = useCartStore()

const addtoCart = (ticket) => {
    store.addTicketToCart(ticket)
}

</script>

<template>
    <button @click="addtoCart(ticket)"
        class="border rounded bg-blue-500 p-2 my-auto font-bold text-white text-xs disabled:bg-blue-100 disabled:cursor-not-allowed">
        🗑️ Remove
    </button>
</template>