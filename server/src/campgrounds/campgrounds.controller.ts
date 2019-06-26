import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Req } from '@nestjs/common';
import { CampgroundsService } from './campgrounds.service';
import { Campground } from 'src/interfaces/campground.interface';
import { Comment } from 'src/interfaces/comment.interface';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
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
  @UseGuards(JwtAuthGuard)
  create(@Req() request: UserRequest, @Body() campground: Campground) {
    this.campgroundsService.create(campground, request);
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

  @Get(':id/comments/:commentId')
  findOneComment(@Param('commentId') commentId): Promise<Comment> {
    return this.campgroundsService.findOneComment(commentId);
  }

  @Post(':id/comments')
  @UseGuards(JwtAuthGuard)
  addComment( @Req() request: UserRequest, @Param('id') id, @Body() comment: Comment) {
    return this.campgroundsService.addComment(id, comment, request);
  }

  @Delete(':id/comments/:commentId')
  deleteComment(@Param('commentId') commentId): Promise<Comment> {
    return this.campgroundsService.deleteComment(commentId);
  }

  @Put(':id/comments/:commentId')
  updateComment(@Body() comment: Comment, @Param('commentId') commentId): Promise<Comment> {
    return this.campgroundsService.updateComment(commentId, comment);
  }

}
