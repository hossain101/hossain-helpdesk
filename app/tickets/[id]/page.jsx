import { NextResponse } from "next/server";
import {notFound} from "next/navigation"


import connectToDB from "@/database";

import Ticket from "@/models/schema";

export const dynamicParams = false;
// export async function generateStaticParams(){
//   try {
//     await connectToDB();
//     const ticket = await Ticket.find();

//     console.log("connection successful.");
   
//     return new NextResponse(ticket.map(()=>{
//       id:ticket.id
//     })).json();
//   } catch (error) {
//     console.log(error);
//   }
// }

async function getTicket(ids) {
  try {
    await connectToDB();
    const ticket = await Ticket.findOne({
      id: ids,
    });

  
      return new NextResponse(JSON.stringify(ticket), { status: 200 }).json();
    

   
  } catch (error) {
 
    notFound();
    console.log(error);
 
    
  }
}

const TicketDetails = async ({ params }) => {
  const id = params.id;
  const ticket = await getTicket(+id);
  if (!ticket) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Ticket Not Found</h2>
          <p className="text-gray-500">The ticket  looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority.toLowerCase()}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;
