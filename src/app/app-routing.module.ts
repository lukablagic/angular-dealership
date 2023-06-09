import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcarsComponent } from './components/addcars/addcars.component';
import { HomeComponent } from './components/home/home.component';
import { SearchBuyComponent } from './components/search-buy/search-buy.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AccessDeniedComponent } from './shared/components/access-denied/access-denied.component';
import { DetailedCarComponent } from './shared/components/detailed-car/detailed-car.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },
   {
    path: 'details',
    pathMatch: 'full',
    component: DetailedCarComponent,
   canActivate: [AuthGuard],
  },
  {
    path: 'search-buy',
    pathMatch: 'full',
    component: SearchBuyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addcars',
    pathMatch: 'full',
    component: AddcarsComponent,
    canActivate: [AuthGuard,AdminGuard],
  },
  {
    path: 'access-denied',
    pathMatch: 'full',
    component: AccessDeniedComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
