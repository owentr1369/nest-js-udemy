import { NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run something before a request is handled by the request handler
    // by the request handler
    console.log("I'm running before handler");
    return handler.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
        console.log("I'm running before response is sent out", data);
      }),
    );
  }
}
