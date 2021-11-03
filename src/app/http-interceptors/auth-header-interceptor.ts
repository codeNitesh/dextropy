import {Injectable} from '@angular/core'
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

    constructor(public router: Router) { }

    intercept (request: HttpRequest<any>, next: HttpHandler){

        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Token ${token}`
                }
            });
        }
        if (!token){
            // this.router.navigate(['/login']);
        }
        return next.handle(request);
    }
}