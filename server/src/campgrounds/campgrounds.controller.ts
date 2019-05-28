import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CampgroundsService } from './campgrounds.service';
import { Campground } from 'src/interfaces/campground-interface';

@Controller('campgrounds')
export class CampgroundsController {

  constructor(private readonly campgroundsService: CampgroundsService) { }

  @Get()
  findAll(): Promise<Campground[]> {
    return this.campgroundsService.findAll();
  }

  @Get(':id')
    findOne(@Param('id') id): Promise<Campground> {
      return this.campgroundsService.findOne(id);
    }

  @Post()
  create(@Body() campground: Campground) {
    this.campgroundsService.create(campground);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Campground> {
    return this.campgroundsService.delete(id);
  }

  @Put(':id')
  update(@Body() campground: Campground, @Param('id') id): Promise<Campground> {
    return this.campgroundsService.update(id, campground);
  }

}
