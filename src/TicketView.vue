<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTicketsStore } from './stores/ticketsStore'
import TicketList from './components/TicketList.vue'
import ButtonAddToCart from './components/ButtonAddToCart.vue'

const store = useTicketsStore()
const { tickets, getTicketCount } = storeToRefs(store);

</script>

<template>
  <h2 class="font-bold mb-2 border-b-1">Tickets</h2>
  <TicketList :tickets="tickets">
    <template v-slot:actions>
      <ButtonAddToCart v-slot="{ticket}" />
    </template>
  </TicketList>
</template>