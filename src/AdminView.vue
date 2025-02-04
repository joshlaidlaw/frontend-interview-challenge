<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTicketsStore } from './stores/ticketsStore'
import TicketList from './components/TicketList.vue'
import TicketForm from './components/TicketForm.vue'
import ButtonDeleteTicket from './components/ButtonDeleteTicket.vue'

const store = useTicketsStore()
const { tickets } = storeToRefs(store)

</script>

<template>
  
  
  <section>
    <h2 class="font-bold mb-2 border-b-1">Admin</h2>    
    <TicketList :tickets="tickets">
      <template v-slot:actions>
        <ButtonDeleteTicket v-slot="{ticket}" />
      </template>
    </TicketList> 
    <div class="flex flex-row gap-1">
      <button class="ml-auto m-1 p-1 px-4 border rounded" popovertarget="addTickets" >Add Ticket</button>
      <TicketForm />
    </div>
  </section>
</template>