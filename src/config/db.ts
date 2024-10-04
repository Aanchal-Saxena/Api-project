import mongoose from 'mongoose';
//import { config } from './config';

const connectToDatabase = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to DB successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting to DB", err);
    });
    

    await mongoose.connect('mongodb://localhost:27017/booksDB');
    console.log('MongoDB connected');

  } catch (err) {
    console.error('MongoDB Initial connection failed:', err);
    process.exit(1);
  }
};

// Export the connection function
export default connectToDatabase;
