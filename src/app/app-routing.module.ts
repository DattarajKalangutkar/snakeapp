import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'snake',
    loadChildren: () => import('./snake/snake.module').then( m => m.SnakePageModule)
  },
  {
    path: 'snakedetails/:id',
    loadChildren: () => import('./snakedetails/snakedetails.module').then( m => m.SnakedetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'transactionlist',
    loadChildren: () => import('./transactionlist/transactionlist.module').then( m => m.TransactionlistPageModule)
  },
  {
    path: 'transaction-detail',
    loadChildren: () => import('./transaction-detail/transaction-detail.module').then( m => m.TransactionDetailPageModule)
  },
  {
    path: 'achivement',
    loadChildren: () => import('./achivement/achivement.module').then( m => m.AchivementPageModule)
  },
  {
    path: 'searchrescuer',
    loadChildren: () => import('./searchrescuer/searchrescuer.module').then( m => m.SearchrescuerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
