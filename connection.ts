import mongoose from "mongoose";




const connectDB = async () => {
	const MONGODB_URL = process.env.MONGODB_URL || '';

	try {
		await mongoose.connect(MONGODB_URL);
		console.log("MongoDB connected");
	} catch (error) {
		console.error("MongoDB connection error:", error);
		process.exit(1);
	}
};

export default connectDB;