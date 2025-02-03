<script setup>
import { storeToRefs } from 'pinia'
import { useTicketsStore } from './stores/ticketsStore'
import TicketList from './components/TicketList.vue'
import TicketForm from './components/TicketForm.vue'
import ButtonRemoveFromCart from './components/ButtonRemoveFromCart.vue'

const store = useTicketsStore()
const { ticketsInCart } = storeToRefs(store)

</script>

<template>
  <h2 class="font-bold mb-2 border-b-1">Cart</h2>
  <section>
    <TicketForm />  
    <TicketList :ticket="ticketsInCart">
      <template v-slot:actions>
        <ButtonRemoveFromCart v-slot="{ticket}" />
      </template>
    </TicketList>
  </section>
</template>