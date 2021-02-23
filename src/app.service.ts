import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string { 
    return 'Helllo World!';
  }
  postHello(post): string { 
    return 'Helllo World!'+post;
  }
}
