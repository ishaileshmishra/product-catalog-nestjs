import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greeting(): string {
    return 'Welcome to Products-Catalog!';
  }
}
