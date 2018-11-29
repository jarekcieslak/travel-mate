import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Filters, SortOption} from '../../services/data.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output()
  handleSearch: EventEmitter<Filters> = new EventEmitter();

  filtersVisible = false;


  filters: Filters = {
    searchText: '',
    sortByPrice: SortOption.None,
    sortByRating: SortOption.None,
    onlySpecial: false
  };


  constructor() {
  }

  search(searchText: string = null) {
    this.filters.searchText = searchText;
    this.handleSearch.emit(this.filters);
  }

  toggleFilters(visible: boolean) {
    this.filtersVisible = visible;
  }

  toggleFiltering(field: string) {

    if (field === 'price') {
      this.filters.sortByPrice = (this.filters.sortByPrice + 1) % 3;
      this.filters.sortByRating = SortOption.None;
    } else if (field === 'rating') {
      this.filters.sortByRating = (this.filters.sortByRating + 1) % 3;
      this.filters.sortByPrice = SortOption.None;
    }
    if (field === 'special') {
      this.filters.onlySpecial = !this.filters.onlySpecial;
    }
  }

  ngOnInit() {
  }

}
