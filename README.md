# TravelMate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

###About the app:
It's basically the same content which you see after going to: http://localhost:4200/about. Application was developed using following libraries:
* Angular7
* Bootstrap
* Angular Material

I chose angular because most of my experience comes from Angular projects, but actually any other library (React / Vue) would be perfectly fine here. I also decided to include bootstrap and angular material to provide some basic styles, grid and typical components. Feature scope was pretty small so I decided not to use any additional state management libraries like redux/ngrx.

###Features:
User can see a default list of activities in Berlin
* It's possible to do text search on titles of activites
* More filters are available after clicking 'more filters'. It's possible to sort using price, rating and select only special offers
* After selecting an activity user is taken to tour details page, which is currently a mock of a details page.
* I grabbed pictures of Berlin from https://source.unsplash.com/


###Assumptions:
* App is using inline dummy activity data as a source
* Only optimize for mobile screen sizes, but tablet and desktop layouts are also supported
* No branding, header, or footer content necessary.



### Prod server (recommended)
Run `ng serve --prod` for a prod server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Unfortunately I could not create unit tests in a given timeframe, but testing framework (Karma) is already connected with the project.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Unfortunately I could not create e2e tests in a given timeframe, but testing framework (Protractor) is already connected with the project.
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

