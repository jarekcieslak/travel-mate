import {Injectable} from '@angular/core';
import {Activities, Filters, SortOption, Tour} from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  getActivities(city: string = 'Berlin'): Activities {
    return {
      'tours': [
        {
          'title': 'German Tour: Parliament Quarter & Reichstag glass dome',
          'price': '14',
          'currency': '$',
          'rating': '4.8',
          'isSpecialOffer': false
        },
        {
          'title': 'Skip the Line: Pergamon Museum Berlin Tickets',
          'price': '21',
          'currency': '$',
          'rating': '4.8',
          'isSpecialOffer': false
        },
        {
          'title': 'Berlin WelcomeCard: Transport, Discounts & Guide Book',
          'price': '10',
          'currency': '$',
          'rating': '4.6',
          'isSpecialOffer': false
        },
        {
          'title': 'Skip the Line: Berlin TV Tower Ticket',
          'price': '143',
          'currency': '$',
          'rating': '4.6',
          'isSpecialOffer': false
        },
        {
          'title': '1-Hour City Tour by Boat with Guaranteed Seating',
          'price': '14',
          'currency': '$',
          'rating': '4.5',
          'isSpecialOffer': false
        },
        {
          'title': 'Berlin Hop-on Hop-off Bus Tour: 1- or 2-Day Ticket',
          'price': '210',
          'currency': '$',
          'rating': '4.3',
          'isSpecialOffer': false
        },
        {
          'title': 'German Tour: Reichstag with Plenary Chamber & Cuppola',
          'price': '59',
          'currency': '$',
          'rating': '4.8',
          'isSpecialOffer': false
        },
        {
          'title': 'Berlin: 2.5-Hour Boat Tour Along the River Spree',
          'price': '41',
          'currency': '$',
          'rating': '4.5',
          'isSpecialOffer': true
        },
        {
          'title': 'Museum Pass Berlin: 3-Day Entry to Over 40 Top Museums',
          'price': '14',
          'currency': '$',
          'rating': '4.5',
          'isSpecialOffer': false
        },
        {
          'title': 'Reichstag: Rooftop Coffee Break at K\u00e4fer',
          'price': '50',
          'currency': '$',
          'rating': '4.6',
          'isSpecialOffer': true
        },
        {
          'title': 'Skip the Line: Neues Museum Berlin Tickets',
          'price': '46',
          'currency': '$',
          'rating': '4.9',
          'isSpecialOffer': true
        },
        {
          'title': 'German Tour: Reichstag with dome Chamber &',
          'price': '87',
          'currency': '$',
          'rating': '4.8',
          'isSpecialOffer': false
        },
        {
          'title': 'Berlin Hop-on Hop-off Bus Tour with Live Commentary',
          'price': '8',
          'currency': '$',
          'rating': '4.3',
          'isSpecialOffer': false
        },
        {
          'title': 'Skip the Line: TV Tower Early Bird Tickets',
          'price': '140',
          'currency': '$',
          'rating': '4.5',
          'isSpecialOffer': false
        }
      ]
    };
  }

  getTourDetails(id: number): Tour {
    const allTours = this.getActivities().tours;
    if (id < allTours.length && id >= 0) {
      return allTours[id];
    } else {
      return null;
    }
  }

  searchActivities(filters: Filters): Activities {

    console.log(filters);
    // Get all activities
    const activities = this.getActivities();

    if (!!filters.searchText) {
      activities.tours = activities
        .tours
        .filter(tour => {
          return tour.title.toLowerCase().indexOf(filters.searchText.toLowerCase()) !== -1;
        });
    }

    this.sortByPrice(filters, activities);
    this.sortByRating(filters, activities);
    this.filterSpecialOffers(filters, activities);

    return activities;
  }

  private filterSpecialOffers(filters: Filters, activities) {
    if (filters.onlySpecial) {
      activities.tours = activities.tours.filter(item => !!item.isSpecialOffer);
    }
  }

  private sortByRating(filters: Filters, activities) {
    // Sort by rating
    if (!!filters.sortByRating) {
      activities.tours = activities.tours.sort((tour1, tour2) => {
        const rating1 = Math.floor(parseFloat(tour1.rating) * 10);
        const rating2 = Math.floor(parseFloat(tour2.rating) * 10);

        if (filters.sortByRating === SortOption.Ascending) {
          return (rating1 - rating2);
        } else {
          return (rating2 - rating1);
        }

      });
    }
  }

  private sortByPrice(filters: Filters, activities) {
    // Sort by price
    if (!!filters.sortByPrice) {
      activities.tours = activities.tours.sort((tour1, tour2) => {
        const price1 = parseInt(tour1.price, 10);
        const price2 = parseInt(tour2.price, 10);

        if (filters.sortByPrice === SortOption.Ascending) {
          return (price1 - price2);
        } else {
          return (price2 - price1);
        }

      });
    }
  }
}
