import {Injectable} from '@angular/core';
import {HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../ui/login/_services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {
    }

    private static shouldSetDefaultContentType(headers: HttpHeaders): Boolean {

        if (headers.has('Custom-Multipart-Header'))
            return false;
        return headers.get('Content-Type') == null;

    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        let headers = req.headers;

        if (AuthInterceptor.shouldSetDefaultContentType(headers))
            headers = headers.set('Content-Type', 'application/json');

        // Get the auth token from the service.
        const authToken = this.auth.getAuthorizationToken();
        if (authToken != null) {
            headers = headers.set('Authorization', 'Bearer ' + authToken);
        }

        const authReq = req.clone({headers: headers});

        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}
