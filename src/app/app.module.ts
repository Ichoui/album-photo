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
import { FrancoisComponent } from './core/library/francois/francois.component';
import { HttpClientModule } from '@angular/common/http';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { DragScrollModule } from 'ngx-drag-scroll/lib';
import { ViewerComponent } from './core/viewer/viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    NotfoundComponent,
    LayoutComponent,
    LibraryComponent,
    LoginComponent,
    MapleComponent,
    BanffComponent,
    FrancoisComponent,
    ViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMasonryGridModule,
    DragScrollModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
