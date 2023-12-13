import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB() {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return mongoose.connection;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "help_desk",
    });
    isConnected = true;
    console.log("MongoDB connected");
    return mongoose.connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}


export default connectToDB;