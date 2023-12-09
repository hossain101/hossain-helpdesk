
import {NextResponse} from "next/server";

import connectToDB from "@/database";

import Ticket from "@/models/schema"
import Link from "next/link";



 const getTickets = async(req)=>{
    try{
        await connectToDB();
        const tickets = await Ticket.find();
        console.log("connection successful.")
        return new NextResponse(JSON.stringify(tickets),{status:200}).json();
    }
    catch(error){
        console.log(error);
    }
} 

//from api/tickets
// import {NextResponse} from "next/server";

// import connectToDB from "@/database";

// import Ticket from "@/models/schema"

// export const GET = async(req)=>{
//     try{
//         await connectToDB();
//         const tickets = await Ticket.find();
//         console.log("connection successful.")
//         return new NextResponse(JSON.stringify(tickets),{status:200});
//     }
//     catch(error){
//         console.log(error);
//     }
// } 

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/tickets"||"https://hossaindesk.onrender.com/api/tickets", {
//     cache: "no-store",
//   });

//   if (!res.ok) return notFound();

//   return res.json();
// }

const TicketList = async () => {
  const tickets = await getTickets();

  console.log(tickets);

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket?.id} className="card my-5 ">
        <Link href={`/tickets/${ticket.id}`}>
          <h3>{ticket?.title}</h3>
          <p>{ticket?.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket?.priority.toLowerCase()}`}>
            {ticket?.priority} priority
          </div>
          </Link>
        </div>
      ))}
      {tickets?.length === 0 && (
        <p className="text-center">There are no open tickets, yaaay!</p>
      )}
    </>
  );
};

export default TicketList;
