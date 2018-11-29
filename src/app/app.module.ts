import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ViewerModule} from './viewer/viewer.module';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MatButtonModule} from '@angular/material';
import {AboutComponent} from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import {MainViewerComponent} from './viewer/main-viewer/main-viewer.component';
import {TourDetailsComponent} from './tour-details/tour-details.component';

const ROUTES: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'tours/:id', component: TourDetailsComponent},
  {path: '', component: MainViewerComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    TourDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ViewerModule,
    MatButtonModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
