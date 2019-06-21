import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { User } from 'src/interfaces/user.interface';

@Controller('authentication')
export class AuthenticationController {

constructor(private readonly authenticationService: AuthenticationService) { }

@Post('register')
async create(@Body() user: User) {
  return await this.authenticationService.create(user);
}

@Post('login')
  async createToken(@Body() user: User): Promise<any> {
      return await this.authenticationService.createToken(user);
  }

}
