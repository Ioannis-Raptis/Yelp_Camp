import { Injectable, HttpService, Logger } from '@nestjs/common';
import { Campground } from 'src/interfaces/campground-interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CampgroundsService {
  constructor(private readonly http: HttpService,
              @InjectModel('Campground')
               private readonly campgroundModel: Model<Campground>) { }

  async findAll(): Promise<Campground[]> {
    try {
      return await this.campgroundModel.find();
    } catch (error) {
      Logger.log(`Querying all documents failed because of: ${error}`);
    }
  }

  async create(campground: Campground): Promise<Campground> {
    try {
      const newCampground = new this.campgroundModel(campground);
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
}
