import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CampgroundsService } from './campgrounds.service';
import { Campground } from 'src/interfaces/campground-interface';

@Controller('campgrounds')
export class CampgroundsController {

  constructor(private readonly campgroundsService: CampgroundsService) { }

  @Get()
  async findAll(): Promise<Campground[]> {
    return await this.campgroundsService.findAll();
  }

  @Post()
  addNew(@Body() campground: Campground) {
    this.campgroundsService.addNew(campground);
  }

}
