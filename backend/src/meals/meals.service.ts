import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class MealsService {
  private readonly dataFile = 'public/data.json';

  getData() {
    const data = fs.readFileSync(this.dataFile, 'utf-8');
    return JSON.parse(data);
  }
}
