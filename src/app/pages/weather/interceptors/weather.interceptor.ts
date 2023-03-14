import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../../../enviroments/enviroment.prod';

export class WeatherInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneRequest = req.clone({
      params: req.params.appendAll({
        units: 'metric',
        appid: enviroment.openWeather.key
      })
    });
    return next.handle(cloneRequest);
  }
}
