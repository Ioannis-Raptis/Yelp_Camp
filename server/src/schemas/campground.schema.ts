import * as mongoose from 'mongoose';

export const CampgroundSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  description: String,
});
