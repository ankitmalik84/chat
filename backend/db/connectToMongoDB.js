import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connection to mongoDB: ", error.message);
  }
};

export default connectToMongoDB;
