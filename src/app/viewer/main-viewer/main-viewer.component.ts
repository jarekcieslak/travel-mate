import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Activities, Filters} from '../../services/data.model';

@Component({
  selector: 'app-main-viewer',
  templateUrl: './main-viewer.component.html',
  styleUrls: ['./main-viewer.component.scss']
})
export class MainViewerComponent implements OnInit {

  activities: Activities = null;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.activities = this.data.getActivities();
  }

  handleSearch(searchFilters: Filters) {
    this.activities = this.data.searchActivities(searchFilters);
  }

}
