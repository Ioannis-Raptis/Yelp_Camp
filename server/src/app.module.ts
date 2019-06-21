import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampgroundsController } from './campgrounds/campgrounds.controller';
import { CampgroundsService } from './campgrounds/campgrounds.service';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';

import { CampgroundSchema } from './schemas/campground.schema';
import { CommentSchema } from './schemas/comment.schema';
import { UserSchema } from './schemas/user.schema';
import { JwtStrategy } from './authentication/jwt.strategy';
import config from './config/keys';

@Module({
  imports: [HttpModule,
            MongooseModule.forRoot(config.mongoURI, { useNewUrlParser: true, useFindAndModify: false }),
            MongooseModule.forFeature([
            { name: 'Campground', schema: CampgroundSchema },
            { name: 'Comment', schema: CommentSchema },
            { name: 'User', schema: UserSchema }]),
            PassportModule.register({ defaultStrategy: 'jwt' }),
            JwtModule.register({
              secret: 'secretKey',
              signOptions: {
                expiresIn: 3600,
              },
            })],
  controllers: [AppController, CampgroundsController, AuthenticationController],
  providers: [AppService, CampgroundsService, AuthenticationService, JwtStrategy],
})
export class AppModule {}
