import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../ui/login/_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(this.authService.getAuthorizationToken());
        if (this.authService.getAuthorizationToken() != null) {
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], {queryParams: {returnUrl: state.url}});
        return false;
    }

}
