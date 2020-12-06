import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoPreloading, PreloadAllModules  } from '@angular/router';
import { CustomPreloadingStrategy } from './core-services/custom-preload'

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./feature-module/login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'home', loadChildren : () => import('./feature-module/dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  {
    path: 'report', loadChildren : () => import('./feature-module/report/report.module').then(module => module.ReportModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : CustomPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
