<script setup>
import { toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import { useTicketsStore } from '../stores/ticketsStore'
import TicketListItem from './TicketListItem.vue';

const store = useTicketsStore()
const { getTicketCount } = storeToRefs(store);

const props = defineProps(['tickets'])
const { tickets } = toRefs(props)

</script>

<template>
  <section>
    <div v-if="getTicketCount === 0">
      No Tickets found
    </div>
    <ul v-else>
      <TicketListItem v-for="[key, value] in tickets" :key="key" :ticket="value">
        <template v-slot:button>
          <slot name="actions" />
        </template>
      </TicketListItem>
    </ul>
  </section>
</template>