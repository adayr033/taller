import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
//import { AppService } from './app.service';
//import { EControladorController } from './e_controlador/e_controlador.controller';
//import { EModuloModule } from './e_modulo/e_modulo.module';
import { ExaController } from './exa/exa.controller';
import { EMModule } from './e_m/e_m.module';

@Module({
  imports: [],
  controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
