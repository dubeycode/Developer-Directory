import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

const mongoUrl = process.env.MONGODB_URL;

try {
  await mongoose.connect(mongoUrl);
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}

app.get('/', (req, res) => {
  res.send('Welcome to the Developer Directory Backend!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});