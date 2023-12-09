import { NextResponse } from "next/server";

import connectToDB from "@/database";

import Ticket from "@/models/schema";

async function getTicket(ids) {
  try {
    await connectToDB();
    const ticket = await Ticket.findOne({
      id: ids,
    });

    console.log("connection successful.");
    console.log("Ticket obj" + ticket);
    return new NextResponse(JSON.stringify(ticket), { status: 200 }).json();
  } catch (error) {
    console.log(error);
  }
}

const TicketDetails = async ({ params }) => {
  const id = params.id;
  const ticket = await getTicket(+id);
  return(
  <main>
    <nav>
      <h2>Ticket Details</h2>
    </nav>
    <div className="card">
        <h3>{ticket?.title}</h3>
        <small>Created by {ticket?.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket?.priority.toLowerCase()}`}>
            {ticket?.priority} priority
          </div>
    </div>
  </main>
  )
};

export default TicketDetails;
