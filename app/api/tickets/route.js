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