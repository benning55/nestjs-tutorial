import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersService } from './users/users.service';

@ApiTags('home')
@Controller('')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user); // TODO: returm JWT access token
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  async getHello(@Request() req): Promise<any> {
    // TODO: require an Bearer
    // return this.appService.getHello();
    // console.log(req.user.id);
    const result = await this.usersService.findById(req.user.id);
    return { data: result };
  }
}
