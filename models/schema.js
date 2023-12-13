import mongoose from "mongoose";


const {Schema} = mongoose;


export  const Ticket = new Schema({
  
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

if (!mongoose.connection || !mongoose.connection.readyState) {
    console.error('Mongoose is not connected');
  }
  
  if (!mongoose.models || !mongoose.models.Ticket) {
    console.error('Ticket model is not registered');
  }
  
  export default mongoose.models && mongoose.models.Ticket || mongoose.model("Ticket", Ticket);