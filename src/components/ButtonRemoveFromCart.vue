<script setup>
import { inject } from 'vue'
import { storeToRefs } from 'pinia'
import { Trash2 } from 'lucide-vue-next'
import { useCartStore } from '../stores/cartStore'  

const ticket = inject('ticket')
const store = useCartStore()
const  removeTicketFromCart = (ticket) => store.removeTicketFromCart(ticket)

</script>

<template>
    <button @click="removeTicketFromCart(ticket)"
        class="flex gap-1 align-center border rounded-full bg-blue-500 p-2 my-auto font-bold text-white disabled:bg-blue-100 disabled:cursor-not-allowed">
        <Trash2 />
        <span class="m-auto">Remove</span>
    </button>
</template>