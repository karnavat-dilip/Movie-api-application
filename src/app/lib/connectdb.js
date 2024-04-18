import mongoose from "mongoose";

async function connectToMongo() {
    try {
         await mongoose.connect(process.env.MONGO_URI);
         console.log("Connected to MongoDB");
       } catch (error) {
         console.error("Error connecting to MongoDB:", error);
         throw error;
        }
    };
    const testSchema = new Schema({
        name: String,
        email: String
     });
 
     const Test = models.Test|| model("Test", testSchema );