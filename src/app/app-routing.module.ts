import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchBuyComponent } from './components/search-buy/search-buy.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  //  canActivate: [AuthGuard],
  },
  {
    path: 'search-buy',
    pathMatch: 'full',
    component: SearchBuyComponent,
  //  canActivate: [AuthGuard],
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
