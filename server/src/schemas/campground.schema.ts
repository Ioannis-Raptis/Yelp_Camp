import * as mongoose from 'mongoose';

export const CampgroundSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  description: String,
  comments: [{type: mongoose.Schema.Types.ObjectId,
              ref: 'Comment',
             }],
});
