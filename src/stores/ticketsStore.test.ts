import { setActivePinia, createPinia } from 'pinia'
import { useTicketsStore } from './ticketsStore'
import { describe, it, expect, beforeEach } from 'vitest'

describe('ticketsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with 10 tickets', () => {
    const store = useTicketsStore()
    expect(store.tickets.size).toBe(10)
  })

  it('adds a new ticket', () => {
    const store = useTicketsStore()
    const newTicket = {
      name: 'New Ticket',
      description: 'New ticket description',
      isVIP: false,
      count: 5,
      price: 50.99,
    }
    store.addTicket(newTicket)
    expect(store.tickets.size).toBe(11)
  })

  it('removes a ticket by id', () => {
    const store = useTicketsStore()
    const ticketId = Array.from(store.tickets.keys())[0]
    store.deleteTicket(ticketId)
    expect(store.tickets.size).toBe(9)
  })
})
