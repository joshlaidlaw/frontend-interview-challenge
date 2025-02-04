<script setup>
import { inject } from 'vue'
import { storeToRefs } from 'pinia'
import { Trash2 } from 'lucide-vue-next'
import { useTicketsStore } from '../stores/ticketsStore';

const ticket = inject('ticket');
const store = useTicketsStore()

const deleteTicket = (ticket) => {
    store.deleteTicket(ticket.id)
}

</script>

<template>
    <button @click="deleteTicket(ticket)"
        class="flex gap-1 align-center border rounded-full bg-red-500 p-2 my-auto font-bold text-white disabled:bg-red-100 disabled:cursor-not-allowed">
        <Trash2 />
        <span class="m-auto">Delete</span>
    </button>
</template>