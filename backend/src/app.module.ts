import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealsService } from './meals/meals.service';
import { MealsController } from './meals/meals.controller';

@Module({
  imports: [],
  controllers: [AppController, MealsController],
  providers: [AppService, MealsService],
})
export class AppModule {}
