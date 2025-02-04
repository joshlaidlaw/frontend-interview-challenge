<script setup>
import { inject } from 'vue'
import { storeToRefs } from 'pinia'
import { ShoppingCart } from 'lucide-vue-next'
import { useCartStore } from '../stores/cartStore'

const ticket = inject('ticket');
const store = useCartStore()

const addtoCart = (ticket) => {
    store.addTicketToCart(ticket)
}

</script>

<template>
    <button @click="addtoCart(ticket)"
        class="flex gap-1 align-center border rounded-full bg-blue-500 p-2 my-auto font-bold text-white disabled:bg-blue-100 disabled:cursor-not-allowed">
        <ShoppingCart />
        <span  class="m-auto">Add to Cart</span>
    </button>
</template>