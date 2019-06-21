import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';
import { CampResponse } from '../dto/campResponse.dto';

@Injectable()
export class AuthenticationService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>,
              private readonly jwtService: JwtService) { }

  async create(user: User): Promise<CampResponse> {
    try {
      const found: User = await this.userModel.findOne({ username: user.username, password: user.password });
      if (found) {
        return new CampResponse(false, 'user already registered', null);
      } else {
        const newUser: Model<User> = new this.userModel(user);
        const saveUser = await newUser.save();
        return new CampResponse(true, 'registration successful', saveUser);
      }
    } catch (error) {
      Logger.log(`Creating new user failed because of: ${error}`);
    }
  }

  async findOne(username: string, password: string): Promise<User> {
    try {
      return await this.userModel.findOne({ username, password });
    } catch (error) {
      Logger.log(`Querying the user failed because of: ${error}`);
    }
  }

  async createToken(user: User) {
    const userDetails: User = await this.findOne(user.username, user.password);
    const userPayload: JwtPayload = { username: userDetails.username };
    if (userPayload) {
      const accessToken = this.jwtService.sign(userPayload);
      return {
        expiresIn: 3600,
        accessToken,
      };
    } else {
      Logger.log(`User details not found`);
    }
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    return await this.userModel.findOne({ username: payload.username });
  }

}
