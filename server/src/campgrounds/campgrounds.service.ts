import { Injectable, HttpService, Logger } from '@nestjs/common';
import { Campground } from 'src/interfaces/campground.interface';
import { Comment } from 'src/interfaces/comment.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserRequest } from 'src/interfaces/userRequest.interface';

@Injectable()
export class CampgroundsService {
  constructor(private readonly http: HttpService,
              @InjectModel('Campground')
    private readonly campgroundModel: Model<Campground>,
              @InjectModel('Comment')
    private readonly commentModel: Model<Comment>) { }

  async findAll(): Promise<Campground[]> {
    try {
      return await this.campgroundModel.find();
    } catch (error) {
      Logger.log(`Querying all documents failed because of: ${error}`);
    }
  }

  async findOne(id: string): Promise<Campground> {
    try {
      return await this.campgroundModel.findOne({ _id: id });
    } catch (error) {
      Logger.log(`Querying the document failed because of: ${error}`);
    }
  }

  async create(campground: Campground, request: UserRequest): Promise<Campground> {
    try {
      const newCampground = new this.campgroundModel(campground);
      newCampground.author.id = request.user._id;
      newCampground.author.username = request.user.username;
      return await newCampground.save();
    } catch (error) {
      Logger.log(`Creating new document failed because of: ${error}`);
    }
  }

  async delete(id: string): Promise<Campground> {
    try {
      return await this.campgroundModel.findByIdAndRemove(id);
    } catch (error) {
      Logger.log(`Deleting document failed because of: ${error}`);
    }
  }

  async update(id: string, campground: Campground): Promise<Campground> {
    try {
      return await this.campgroundModel.findByIdAndUpdate(id, campground, { new: true });
    } catch (error) {
      Logger.log(`Updating document failed because of: ${error}`);
    }
  }

  async addComment(campgroundId: string, comment: Comment, request: UserRequest): Promise<Comment> {
    try {
      const newComment = new this.commentModel(comment);
      newComment.author.id = request.user._id;
      newComment.author.username = request.user.username;
      await newComment.save();
      const campground = await this.findOne(campgroundId);
      campground.comments.push(newComment);
      await this.update(campgroundId, campground);
      return newComment;
    } catch (error) {
      Logger.log(`Adding new comment failed because of: ${error}`);
    }
  }

  async findOneComment(commentId: string): Promise<Comment> {
    try {
      return await this.commentModel.findOne({ _id: commentId });
    } catch (error) {
      Logger.log(`Querying the document failed because of: ${error}`);
    }
  }

  async deleteComment(commentId: string): Promise<Comment> {
    try {
      return await this.commentModel.findByIdAndRemove(commentId);
    } catch (error) {
      Logger.log(`Deleting document failed because of: ${error}`);
    }
  }

  async updateComment(commentId: string, comment: Comment): Promise<Comment> {
    try {
      return await this.commentModel.findByIdAndUpdate(commentId, comment, { new: true });
    } catch (error) {
      Logger.log(`Updating document failed because of: ${error}`);
    }
  }

  async populateComments(campgroundId: string): Promise<Campground> {
    try {
      const campground = await this.campgroundModel.
      findOne({ _id: campgroundId }).
      populate('comments');

      return campground.comments;
      } catch (error) {
      Logger.log(`Populating comments failed because of: ${error}`);
    }
  }

}
