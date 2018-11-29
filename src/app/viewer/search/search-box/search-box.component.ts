import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output()
  handleSearch: EventEmitter<string> = new EventEmitter();

  searchText = '';

  constructor() {
  }

  ngOnInit() {
  }

  search(searchText: string) {
    this.handleSearch.emit(searchText);
  }

}
