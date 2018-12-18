import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { LayoutComponent } from './core/layout/layout.component';
import { LibraryComponent } from './core/library/library.component';
import { LoginComponent } from './core/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MapleComponent } from './core/library/maple/maple.component';
import { BanffComponent } from './core/library/banff/banff.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    NotfoundComponent,
    LayoutComponent,
    LibraryComponent,
    LoginComponent,
    MapleComponent,
    BanffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
