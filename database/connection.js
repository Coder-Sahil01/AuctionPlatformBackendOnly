import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "AUCTION_PLATFORM",
    });
    console.log("Connected to the database.");
  } catch (err) {
    console.error(`Error connecting to the database: ${err.message}`);
    process.exit(1);
  }
};