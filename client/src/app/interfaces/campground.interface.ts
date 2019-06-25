import { Comment } from './comment.interface';

export interface Campground {
  name: string;
  imageUrl: string;
  description: string;
  _id: string;
  comments: Array<Comment>;
}
