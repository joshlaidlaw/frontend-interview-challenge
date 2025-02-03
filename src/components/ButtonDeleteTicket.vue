<script setup>
import { inject } from 'vue'
import { storeToRefs } from 'pinia'
import { useTicketsStore } from '../stores/ticketsStore';

const ticket = inject('ticket');
const store = useTicketsStore()

const deleteTicket = (ticket) => {
    store.deleteTicket(ticket.id)
}

</script>

<template>
    <button @click="deleteTicket(ticket)"
        class="border rounded bg-red-500 p-2 my-auto font-bold text-white text-xs disabled:bg-red-100 disabled:cursor-not-allowed">
        🗑️ Delete
    </button>
</template>