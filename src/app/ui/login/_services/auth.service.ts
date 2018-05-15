import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HandleError, HttpErrorHandler} from '../../../http-error-handler';
import {catchError, map} from 'rxjs/operators';
import {GeneralResponse} from '../../../models/GeneralResponse';
import {AUTH_API_BASE_URL} from '../../../../environments/api-base-constants';
import {LoginResponse} from '../../../models/LoginResponse';
import {LoginRequest} from '../../../models/LoginRequest';
import {CURRENT_USER} from '../../../utils/constants';


const LOGIN_API = AUTH_API_BASE_URL + 'login';

@Injectable()
export class AuthService {

    private handleError: HandleError;

    constructor(private http: HttpClient,
                private httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('AuthService');
    }

    login(email: string): Observable<GeneralResponse<LoginResponse>> {

        this.logout();
        let loginRequest = JSON.stringify(new LoginRequest(email));
        return this.http.post<GeneralResponse<LoginResponse>>(LOGIN_API, loginRequest).pipe(
            map(data => {
                console.log(data);

                let response: GeneralResponse<LoginResponse> = data;

                if (response.status) {
                    // store jwt token in local storage to
                    // keep user logged in between page refreshes
                    this.setAuthorizationToken(response.data.authToken);
                }

                return response;
            }),
            catchError(this.handleError<GeneralResponse<LoginResponse>>('login')),
        );
    }

    getAuthorizationToken() {
        return sessionStorage.getItem(CURRENT_USER);
    }

    setAuthorizationToken(token: string) {
        sessionStorage.setItem(CURRENT_USER, token);
    }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem(CURRENT_USER);
    }
}
