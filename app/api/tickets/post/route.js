//from api/tickets
import {NextResponse} from "next/server";

import connectToDB from "@/database";

import Ticket from "@/models/schema"

export const POST = async(req)=>{
   const { id,title, body, priority, user_email} = await req.json();
    try{
        await connectToDB();
        const tickets = await Ticket.create({id,title, body, priority, user_email});
        // return new NextResponse(JSON.stringify(tickets),{status:200});

        return new NextResponse(JSON.stringify(tickets),{status:201});
    }
    catch(error){
        console.log(error);
    }
} 