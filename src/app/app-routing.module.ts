import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { LibraryComponent } from './core/library/library.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuardService as AuthGuard } from './auth/auth.guard';
import { MapleComponent } from './core/library/maple/maple.component';
import { BanffComponent } from './core/library/banff/banff.component';

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
            canActivate: [AuthGuard],
            component: MapleComponent
          },
          {
            path: 'banff',
            component: BanffComponent
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
