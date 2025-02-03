<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTicketsStore } from '../stores/ticketsStore'

const BASE_NEW_TICKET = {
  name: '',
  description: '',
  isVIP: false,
  count: 0,
  price: 0,
}

const newTicket = ref(BASE_NEW_TICKET)
const store = useTicketsStore()

const addTicket = (ticket) => {
  store.addTicket(ticket)
  newTicket.value = BASE_NEW_TICKET
}

</script>

<style scoped>

.ticket-add-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ticket-add-form label {
  font-weight: bold;
}

.ticket-add-form input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

html {
  font-family: sans-serif;
}

#addTickets {
  border: none;
  padding: 1.5rem;
  border-radius: 1rem;
  max-height: fit-content;
  left: calc(100% / 2 -(250px / 2));
}

#addTickets::backdrop {
  background-color: #0005;
}

#addTickets h3 {
  margin-top: 0;
}

#addTickets p {
  color: #666;
}


</style>

<template> 
<div popover id="addTickets"> 
  <section class="x-0 y-0 bg-white bg-opacity-90 flex flex-col items-center justify-center"> 
    <h4>Add Tickets</h4>
    <form class="ticket-add-form flex flex-col w-xl" @submit.prevent="addTicket(newTicket)">
      <label for="name">Name</label>
      <input type="text" v-model.trim="newTicket.name" />
      <label for="description">Description</label>
      <input type="text" v-model.trim="newTicket.description" />
      <label for="isVIP">VIP?</label>
      <input type="checkbox" v-model="newTicket.isVIP"  />
      <label for="count">Number of Tickets</label>
      <input type="number" v-model.number="newTicket.count" />
      <label for="price">Price</label>
      <input type="number" v-model.number="newTicket.price" />
      <button type="submit">Add Ticket</button>
    </form>
  </section>
</div>
</template>