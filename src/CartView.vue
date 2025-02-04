<script setup>
import { storeToRefs } from 'pinia'
import TicketList from './components/TicketList.vue'
import TicketForm from './components/TicketForm.vue'
import ButtonRemoveFromCart from './components/ButtonRemoveFromCart.vue'
import { useCartStore } from './stores/cartStore'

const store = useCartStore()
const { ticketsInCart } = storeToRefs(store)

</script>

<template>
  <h2 class="font-bold mb-2 border-b-1">Cart</h2>
  <section>
    <TicketForm />  
    <TicketList :tickets="ticketsInCart">
      <template v-slot:actions>
        <ButtonRemoveFromCart v-slot="{ticket}" />
      </template>
    </TicketList>
  </section>
</template>