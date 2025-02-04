import { Ref, ref, computed } from 'vue';
import { defineStore } from 'pinia';

export type Ticket = {
  id: number;
  name: string;
  description: string;
  isVIP: boolean;
  count: number;
  price: number;
  quantity: number;
}


export const useCartStore = defineStore('cartStore', () => {
  const ticketsInCart = ref(new Map<number, Ticket>([]));


  let itemsInCart: Ref<number> = ref(0);

  const addTicketToCart = (ticket: Ticket) => {
    if (ticketsInCart.value.has(ticket.id)) {
      const cartItem = ticketsInCart.value.get(ticket.id);
      if (cartItem) {
        cartItem.quantity++;
        ticketsInCart.value.set(ticket.id, cartItem);
      }
    }
    itemsInCart.value++;
    ticketsInCart.value.set(ticket.id, {...ticket, quantity: 1});
  }

  const removeTicketFromCart = (ticket: Ticket) => {
    if (ticketsInCart.value.has(ticket.id)) {
      const cartItem = ticketsInCart.value.get(ticket.id);
      if (cartItem) {
        cartItem.quantity--;
        itemsInCart.value-- ;
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
});
