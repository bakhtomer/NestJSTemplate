import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string { 
    return 'Get Helllo World!';
  }

  postHello(): string { 
    return 'Post Helllo World!';
  }
  putHello(): string { 
    return 'Put Helllo World!';
  }
  patchHello(): string { 
    return 'patch Helllo World!';
  }
}
