import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export type Ticket = {
    id: number;
    name: string;
    description: string;
    isVIP: boolean;
    count: number;
    price: number;
}

type newTicket = Omit<Ticket, 'id'>;

export const useTicketsStore = defineStore('ticketsStore', () => {
    const tickets = ref(new Map<number, Ticket>([]));

    for (let i = 1; i <= 10; i++) {
        const tempTicket = {
            name: 'placholder',
            description: 'this is the description',
            isVIP: i % 2 === 0,
            count: Math.floor(Math.random() * 10),
            price: Math.floor(Math.random() * 100) + 0.99,
        }

        tickets.value.set(i, { id: i, ...tempTicket });
    }

    const getTicketCount = computed(() => tickets.value.size);
    const getTickets = () => tickets.value;

    const addTicket = (ticket: newTicket) => {
        const newIndex = tickets.value.size === 0 ? 0 : tickets.value.size + 1;
        console.log(ticket.count);
        if (ticket.count > 1) {

            for (let i = 1; i <= ticket.count; i++) {
                const index = tickets.value.size + 1;
                tickets.value.set(index, { id: index, ...ticket });
            }
            return;
        }


        tickets.value.set(newIndex, { id: newIndex, ...ticket });
    }

    const deleteTicket = (id: number) => tickets.value.delete(id);

    const updateTicket = (id: number, ticket: string) => tickets.value.set(id, { id, name: ticket });


    return {
        tickets,
        getTickets,
        addTicket,
        deleteTicket,
        updateTicket,
        getTicketCount,
        getTicketById: () => (id: number) => tickets.value.get(id),
    }
});
