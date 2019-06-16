import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampgroundsController } from './campgrounds/campgrounds.controller';
import { CampgroundsService } from './campgrounds/campgrounds.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { CampgroundSchema } from './schemas/campground.schema';
import { CommentSchema } from './schemas/comment.schema';

@Module({
  imports: [HttpModule,
            MongooseModule.forRoot(config.mongoURI, { useNewUrlParser: true, useFindAndModify: false }),
            MongooseModule.forFeature([{ name: 'Campground', schema: CampgroundSchema }]),
            MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }])],
  controllers: [AppController, CampgroundsController],
  providers: [AppService, CampgroundsService],
})
export class AppModule {}
