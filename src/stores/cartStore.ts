import { computed, Ref, ref } from 'vue';
import { defineStore } from 'pinia';

export type Ticket = {
  id: number;
  name: string;
  description: string;
  isVIP: boolean;
  count: number;
  price: number;
}

type CartItem = {
  ticket: Ticket;
  count: number;
}

export const useCartStore = defineStore('cartStore', () => {
  const ticketsInCart = ref(new Map<number, CartItem>([]));
  let itemsInCart: Ref<number> = ref(0);

  const addTicketToCart = (ticket: Ticket) => {
    if (ticketsInCart.value.has(ticket.id)) {
      const cartItem = ticketsInCart.value.get(ticket.id);
      if (cartItem) {
        cartItem.count++;
        ticketsInCart.value.set(ticket.id, cartItem);
      }
    }
    itemsInCart.value++;
    ticketsInCart.value.set(ticket.id, { ticket: ticket, count: 1 });
  }

  const removeTicketFromCart = (ticket: Ticket) => {
    if (ticketsInCart.value.has(ticket.id)) {
      const cartItem = ticketsInCart.value.get(ticket.id);
      if (cartItem) {
        cartItem.count--;
        itemsInCart.value--;
        cartItem.count === 0 ? ticketsInCart.value.delete(ticket.id) : ticketsInCart.value.set(ticket.id, cartItem);
      }
    }
  }

  return {
    ticketsInCart,
    itemsInCart,
    addTicketToCart,
    removeTicketFromCart,
  }
});
