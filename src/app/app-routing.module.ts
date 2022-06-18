import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
    path: 'transaction-detail/:id',
    loadChildren: () => import('./transaction-detail/transaction-detail.module').then( m => m.TransactionDetailPageModule)
  },
  {
    path: 'achivement',
    loadChildren: () => import('./achivement/achivement.module').then( m => m.AchivementPageModule)
  },
  {
    path: 'searchrescuer',
    loadChildren: () => import('./searchrescuer/searchrescuer.module').then( m => m.SearchrescuerPageModule)
  },
  {
    path: 'userhome',
    loadChildren: () => import('./userhome/userhome.module').then( m => m.UserhomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'firstaid',
    loadChildren: () => import('./firstaid/firstaid.module').then( m => m.FirstaidPageModule)
  },
  {
    path: 'hospital',
    loadChildren: () => import('./hospital/hospital.module').then( m => m.HospitalPageModule)
  },
  {
    path: 'hospitaldetail/:id',
    loadChildren: () => import('./hospitaldetail/hospitaldetail.module').then( m => m.HospitaldetailPageModule)
  },
  {
    path: 'wildlife',
    loadChildren: () => import('./wildlife/wildlife.module').then( m => m.WildlifePageModule)
  },
  {
    path: 'wildlifedetail/:id',
    loadChildren: () => import('./wildlifedetail/wildlifedetail.module').then( m => m.WildlifedetailPageModule)
  },
  {
    path: 'snakeinfo',
    loadChildren: () => import('./snakeinfo/snakeinfo.module').then( m => m.SnakeinfoPageModule)
  },
  {
    path: 'snakedetail/:id',
    loadChildren: () => import('./snakedetail/snakedetail.module').then( m => m.SnakedetailPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'identification',
    loadChildren: () => import('./identification/identification.module').then( m => m.IdentificationPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'eventdetails/:id',
    loadChildren: () => import('./eventdetails/eventdetails.module').then( m => m.EventdetailsPageModule)
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
    path: 'attributes',
    loadChildren: () => import('./attributes/attributes.module').then( m => m.AttributesPageModule)
  },
  {
    path: 'updatetrans/:id',
    loadChildren: () => import('./updatetrans/updatetrans.module').then( m => m.UpdatetransPageModule)
  },
  {
    path: 'completetrans/:id',
    loadChildren: () => import('./completetrans/completetrans.module').then( m => m.CompletetransPageModule)
  },
  {
    path: 'rescusertranlist',
    loadChildren: () => import('./rescusertranlist/rescusertranlist.module').then( m => m.RescusertranlistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
