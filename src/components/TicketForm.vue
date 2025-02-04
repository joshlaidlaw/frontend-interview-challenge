<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { X } from 'lucide-vue-next'
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


const closePopoverModal = () => {
  if(document.getElementById("addTickets")) {
    popover.hidePopover();
  }
}

const addTicket = (ticket) => {
  closePopoverModal()
  store.addTicket(ticket)
  closePopoverModal()
  newTicket.value = BASE_NEW_TICKET
}

</script>

<style scoped>

.ticket-add-form {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  label {
    font-weight: bold;
  }

  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    
  }
}

#addTickets {
  border: none;
  padding: 1.5rem;
  border-radius: 1rem;
  max-height: fit-content;
  left: calc(100% / 2 - (576px / 2));
  top: calc(100% / 2 - (509px / 2));
}

#addTickets::backdrop {
  background-color: #0005;
}


</style>

<template> 
<div popover id="addTickets"> 
  <section class="x-0 y-0 bg-white bg-opacity-90 flex flex-col justify-center"> 
    <div class="flex flex-row justify-between pb-1 mb-1 border-b-1"> 
      <h4 class="font-bold text-xl text-left text-gray-800">Add Tickets</h4> 
      <button class="ml-auto" popovertarget="addTickets" popovertargetaction="hide"> 
        <X size="24" class="text-gray-500"/> 
      </button>
    </div>
    <form class="ticket-add-form flex flex-col gap-0 w-xl" @submit.prevent="addTicket(newTicket)">
      <label for="name">Name</label>
      <input id="name" v-model.trim="newTicket.name" autocomplete="false" />
      <label for="description">Description</label>
      <input id="description" v-model.trim="newTicket.description" />
      <div>
        <label class="mr-2" for="isVIP">VIP?</label>
        <input id="isVIP" type="checkbox" v-model="newTicket.isVIP"  />
      </div>
      <label for="count">Number of Tickets</label>
      <input id="count" type="number" v-model.number="newTicket.count" />
      <label for="price">Price</label>
      <input id="price" type="number" v-model.number="newTicket.price" />
      <button class="py-1 px-2 rounded-lg border-1 bg-green-500 text-white mr-auto" type="submit">Add Ticket</button>
    </form>
  </section>
</div>
</template>