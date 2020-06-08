import {
  createParamDecorator,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

// Authorization guard

// The AuthGuard that we'll build now assumes an authenticated user
// It will extract and validate the token, and use the extracted information
// to determine whether the request can proceed or not

// This is an example to show how guards fit into the request/response cycle.
@Injectable()
export class AuthGaurd implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return request; //validateRequest(request);
  }
}

// Custom Decorator:
export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user && user[data] : user;
  },
);
