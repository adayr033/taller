import { Get, Controller, Render } from '@nestjs/common';

@Controller('api/v1/index')
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Cristian Adayr Garcia Muñoz' };
  }
}
