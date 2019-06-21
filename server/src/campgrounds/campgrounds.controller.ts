import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Req } from '@nestjs/common';
import { CampgroundsService } from './campgrounds.service';
import { Campground } from 'src/interfaces/campground.interface';
import { Comment } from 'src/interfaces/comment.interface';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { Request } from 'express';
import { UserRequest } from '../interfaces/userRequest.interface';

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

  @Get(':id/comments')
  populateComments(@Param('id') id): Promise<any> {
    return this.campgroundsService.populateComments(id);
  }

  @Post(':id/comments')
  @UseGuards(JwtAuthGuard)
  addComment( @Req() request: UserRequest, @Param('id') id, @Body() comment: Comment) {
    return this.campgroundsService.addComment(id, comment, request);
  }

}
