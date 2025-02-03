<script setup>
import { defineProps, toRefs, provide } from 'vue'
const props = defineProps(['ticket'])
const { ticket } = toRefs(props)
provide('ticket', ticket);

</script>

<template>
  <li v-if="ticket" class="flex flex-row gap-1 space-between border-b-1 p-2 hover:bg-slate-50">
    <div class="flex flex-col justify">
      <h3 class="flex font-bold text-lg">
        <div class="flex flex-row gap-1 mr-1">
          <span v-if="ticket.isVIP" class="py-1 px-2 border-1 text-xs rounded-full text-white bg-blue-900">VIP</span>
        </div>
        {{ ticket.name }}
      </h3>
      <p class="font-light text-sm">{{ ticket.description }}</p>

    </div>
    <div class="flex flex-col items-end justify-between ml-auto">
      <span class="text-xs">Available: {{ ticket.count }}</span>
      ${{ ticket.price }}
      <div >
        <slot name="button"></slot>
      </div>
    </div>
  </li>
</template>