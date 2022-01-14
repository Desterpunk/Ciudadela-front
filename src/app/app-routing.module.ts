import { HomePageComponent } from './pages/home-page/home-page.component';
import { requestPageComponent } from './pages/request-page/request-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'request-page',
    component: requestPageComponent,
  },
  {
    path: 'home-page',
    component: HomePageComponent,
  },
  { path: '',   redirectTo: '/home-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
