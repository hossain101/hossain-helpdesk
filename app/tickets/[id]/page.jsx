import { NextResponse } from "next/server";
import {notFound} from "next/navigation"


import connectToDB from "@/database";

import Ticket from "@/models/schema";
import Link from "next/link";

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
   // await new Promise(resolve=>setTimeout(resolve,3000));
    await connectToDB();
    const ticket = await Ticket.findOne({
      id: ids,
    });


  
      return new NextResponse(JSON.stringify(ticket), { status: 200 }).json();
    

   
  } catch (error) {
    console.log(error);
    notFound();
    
 
    
  }
}

const TicketDetails = async ({ params }) => {
  const id = params.id;
  const ticket = await getTicket(+id);
  if (!ticket) {
    return (
      <div className=" flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center border-red-200 border-2">
          <h2 className="text-3xl font-bold mb-4 text-red-600">Oops! Ticket Not Found</h2>
          <p className="text-red-500">The ticket you&apos;re looking for does not exist. Please check the ID and try again.</p>
          <Link href={"/"}>
          <button className="mt-5 px-4 py-2 rounded text-white bg-red-500 hover:bg-red-700 focus:outline-none">Go Back</button>
          </Link>
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
