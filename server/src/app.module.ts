import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampgroundsController } from './campgrounds/campgrounds.controller';
import { CampgroundsService } from './campgrounds/campgrounds.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, CampgroundsController],
  providers: [AppService, CampgroundsService],
})
export class AppModule {}
