export interface Tour {
  title: string;
  price: string;
  currency: string;
  rating: string;
  isSpecialOffer: boolean;
}

export interface Activities {
  tours: Tour[];
}

export interface Filters {
  searchText: string;
  sortByPrice: SortOption;
  sortByRating: SortOption;
  onlySpecial: boolean;
}

export enum SortOption {
  None = 0, Ascending = 1, Descending = 2,
}
