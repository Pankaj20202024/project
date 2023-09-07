import { Controller, Get } from '@nestjs/common';
import { MealsService } from './meals.service';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Get()
  findAll() {
    return this.mealsService.getData().meals;
  }
}
