import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialsPageComponent } from './pages/materials-page/materials-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'materials-page',
    component: MaterialsPageComponent,
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
