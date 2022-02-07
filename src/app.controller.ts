import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { STATUS_CODES } from 'http';
import { AppService } from './app.service';
import { FTAuthGuard } from './auth/42-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()

  getHello(): string {
  }

  @UseGuards(FTAuthGuard)
  @Post('/login')
  login(@Request() req) {
    console.log('/longin called');
    return req.user;
  }
}
