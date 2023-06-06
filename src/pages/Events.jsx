import React from 'react'
import EventForm from '../MyComponents/EventForm/EventForm'
import TicketForm from '../MyComponents/TicketForm/TicketForm'

export default function Events() {
  return (<>
    
    <p className="inline-block text-white border-b-2 border-red-500">Create Event</p>
    <EventForm/>
    <p className="inline-block text-white border-b-2 border-red-500">Create Tickets</p>
    <TicketForm/>
</>
  )
}
