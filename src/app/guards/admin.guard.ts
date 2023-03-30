import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CarsAPIService } from '../services/cars-api.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  isAdmin: Observable<boolean>;
  constructor(
    public auth: AuthService,
    private api: CarsAPIService,
    private router: Router,
  ) {
    this.isAdmin = this.api.getUserRoleAdmin();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean> {
    if(!this.isAdmin){
      this.router.navigate(['/access-denied']);
    }
    return this.isAdmin;
  }
}
