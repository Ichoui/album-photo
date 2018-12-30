import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { LibraryComponent } from './core/library/library.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuardService as AuthGuard } from './config/auth/auth.guard';
import { MapleComponent } from './core/library/maple/maple.component';
import { BanffComponent } from './core/library/banff/banff.component';
import { MapleGuard } from './config/routes-guards/maple.guard';
import { BanffGuard } from './config/routes-guards/banff.guard';
import { FrancoisComponent } from './core/library/francois/francois.component';
import { FrancoisGuard } from './config/routes-guards/francois.guard';
import { JumpGuard } from './config/routes-guards/jump.guard';
import { JumpComponent } from './core/library/jump/jump.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/library',
        pathMatch: 'full'
      },
      {
        path: 'library',
        component: LibraryComponent,
        children: [
          {
            path: 'maple',
            canActivate: [MapleGuard],
            component: MapleComponent
          },
          {
            path: 'banff',
            canActivate: [BanffGuard],
            component: BanffComponent
          },
          {
            path: 'francois',
            canActivate: [FrancoisGuard],
            component: FrancoisComponent
          }, {
            path: 'jump',
            canActivate: [JumpGuard],
            component: JumpComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
