import mongoose, { mongo } from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`Mongodb connected: ${conn.connection.name}`);
  } catch {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
