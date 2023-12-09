import mongoose from "mongoose";


const {Schema} = mongoose;

const ticketSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    body: {
        type:String,
        required:true
    },
    priority: {
        type:String,
        required:true
    },
    user_email: {
        type:String,
        required:true
    },
    id: {
        type:Number,
        required:true
    },
},
{timeStamps:true}
);

export default mongoose.models.Ticket|| mongoose.model("Ticket",ticketSchema);