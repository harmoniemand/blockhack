import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/i',
    pathMatch: 'full',
  },
  {
    path: 'public',
    loadChildren: './modules/public/public.module#PublicModule'
  },
  {
    path: 'i',
    loadChildren: './modules/intern/intern.module#InternModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
