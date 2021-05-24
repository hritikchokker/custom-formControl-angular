import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then(m => m.AddressModule)
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
