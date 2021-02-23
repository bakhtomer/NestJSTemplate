import {
  BadRequestException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("applyed class logger");
    const headers = req.headers;
    // if (headers.authorization) {
    //   next();
    // }
    // throw new UnauthorizedException();
      next();
  
}
}

// export function loggerFunction(req: Request, res: Response, next: NextFunction) {

//     console.log(
//               "applyed middleWare and \nthis is functional middleware when dont need dependencies"
//             );
// next();
// };
