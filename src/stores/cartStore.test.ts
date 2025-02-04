import { setActivePinia, createPinia } from 'pinia'
import { useCartStore, Ticket } from './cartStore'
import { describe, it, expect, beforeEach } from 'vitest'

describe('cartStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with an empty cart', () => {
    const store = useCartStore()
    expect(store.ticketsInCart.size).toBe(0)
    expect(store.itemsInCart).toBe(0)
  })

  it('adds a ticket to the cart', () => {
    const store = useCartStore()
    const ticket: Ticket = {
      id: 1,
      name: 'Test Ticket',
      description: 'Test description',
      isVIP: false,
      count: 10,
      price: 100,
      quantity: 1,
    }
    store.addTicketToCart(ticket)
    expect(store.ticketsInCart.size).toBe(1)
    expect(store.itemsInCart).toBe(1)
  })

  it('increments the quantity of an existing ticket in the cart', () => {
    const store = useCartStore()
    const ticket: Ticket = {
      id: 1,
      name: 'Test Ticket',
      description: 'Test description',
      isVIP: false,
      count: 10,
      price: 100,
      quantity: 1,
    }
    store.addTicketToCart(ticket)
    store.addTicketToCart(ticket)
    expect(store.ticketsInCart.get(ticket.id)?.quantity).toBe(2)
    expect(store.itemsInCart).toBe(2)
  })

  it('removes a ticket from the cart', () => {
    const store = useCartStore()
    const ticket: Ticket = {
      id: 1,
      name: 'Test Ticket',
      description: 'Test description',
      isVIP: false,
      count: 10,
      price: 100,
      quantity: 1,
    }
    store.addTicketToCart(ticket)
    store.removeTicketFromCart(ticket)
    expect(store.ticketsInCart.size).toBe(0)
    expect(store.itemsInCart).toBe(0)
  })
})
