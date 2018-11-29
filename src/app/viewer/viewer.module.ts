import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSliderModule
} from '@angular/material';
import {MainViewerComponent} from './main-viewer/main-viewer.component';
import {SearchBoxComponent} from './search/search-box/search-box.component';
import {FormsModule} from '@angular/forms';
import {SearchComponent} from './search/search.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [CardComponent, MainViewerComponent, SearchBoxComponent, SearchComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule,
    MatSliderModule,
    MatIconModule,
    RouterModule,
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  exports: [MainViewerComponent]
})
export class ViewerModule {
}
