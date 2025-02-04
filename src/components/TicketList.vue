<script lang="ts" setup>
import { toRefs } from 'vue'
import TicketListItem from './TicketListItem.vue'

const props = defineProps(['tickets'])
const { tickets } = toRefs(props)
</script>

<template>
  <section>
    <div
      class="flex item-center flex-col justify-center p-4 rounded-xl border-1px bg-gray-100 w-full min-h-96 text-gray-500"
      v-if="tickets.size === 0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        alt="No Tickets"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        class="lucide lucide-ticket w-16 mx-auto text-gray-500"
      >
        <path
          d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
      </svg>
      <p class="text-lg font-bold text-center mx-auto text-gray-500">No Tickets</p>
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
