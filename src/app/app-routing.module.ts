import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./user-detail-form/user-detail-form.module').then(m => m.UserDetailFormModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./star-rating/star-rating.module').then(m => m.StarRatingModule)
  },
  {
    path: 'input-masking',
    loadChildren: () => import('./input-masking/input-masking.module').then(m => m.InputMaskingModule)
  },
  {
    path: 'time-picker',
    loadChildren: () => import('./time-picker-example/time-picker-example.module').then(m => m.TimePickerExampleModule)
  },
  {
    path: 'quantity',
    loadChildren: () => import('./quantity/quantity.module').then(m => m.QuantityModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
