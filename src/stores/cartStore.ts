import { Ref, ref } from 'vue'
import { defineStore } from 'pinia'

export type Ticket = {
  id: number
  name: string
  description: string
  isVIP: boolean
  count: number
  price: number
  quantity: number
}

export const useCartStore = defineStore('cartStore', () => {
  const ticketsInCart = ref(new Map<number, Ticket>([]))

  const itemsInCart: Ref<number> = ref(0)

  const addTicketToCart = (ticket: Ticket) => {
    if (ticketsInCart.value.has(ticket.id)) {
      const cartItem = ticketsInCart.value.get(ticket.id)
      if (cartItem) {
        cartItem.quantity = cartItem.quantity + 1
        ticketsInCart.value.set(ticket.id, cartItem)
      }
    } else {
      ticketsInCart.value.set(ticket.id, { ...ticket, quantity: 1 })
    }
    itemsInCart.value++
  }

  const removeTicketFromCart = (ticket: Ticket) => {
    if (ticketsInCart.value.has(ticket.id)) {
      const cartItem = ticketsInCart.value.get(ticket.id)
      if (cartItem) {
        cartItem.quantity--
        itemsInCart.value--
        ticketsInCart.value.delete(ticket.id)
      }
    }
  }

  return {
    ticketsInCart,
    itemsInCart,
    addTicketToCart,
    removeTicketFromCart,
  }
})
