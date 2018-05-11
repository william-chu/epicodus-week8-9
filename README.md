# Site Rebuild

#### By William Chu

## Description

A website rebuild using Angular inspired by Neuw Denim https://neuwdenim.com/us/

Screenshot of Actual Site (5/4/18)
![Neuw Denim Website](https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/NeuwDenimSite.png)

## User Stories

| Basic Features | Input | Output | Status |
| --- | --- | --- | --- |
| Customer wants to see a page of clothing items for sale | load page | sale items show in grid layout | Completed |
| Customer wants to see alternate views of products on hover | hover over sale item | image changes | Completed |
| Customer wants to filter by product type | select filter | sale item grid updates | Completed |

| Advanced Features | Input | Output | Status |
| --- | --- | --- | --- |
| Customer wants visual cue for items that are out of stock | load page | sale items show out of stock| Completed |
| Customer wants to be able to use nav bar to view sales page | click on sales category | route to sale page | Completed |
| Customer wants to be able to drill down into sales item details | click on sale item | route to item page | Completed |

| Wishlist Features | Input | Output | Status |
| --- | --- | --- | --- |
| Customer wants to see landing page when accessing site | load page | landing page loads | Completed |
| Customer wants to change amount of columns that display products | click button | grid layout changes | In Progress |
| Customer wants cart functionality | click add to cart | cart updates | In Progress |

## Angular Site Structure

| Model | View | Components |
| --- | --- | --- |
| SaleItem {<br>productId: number,<br>price: number,<br>imgDisplay: string,<br>imgMain: string,<br>imgAlt: string,<br>imgBack: string,<br>productType: string,<br>inventory: number<br>}<br><br>KeyLook {<br>postDate: string,<br>description: string,<br>imgMain: string<br>}<br><br>JeanFit {<br>gender: string,<br>name: string,<br>description: string,<br>imgMain: string<br>} | NavBar (persistent)<br>Landing Page<br>Mens Sale Page<br>Womens Sale Page<br>Sale Item Detail Page(Dynamic Route)<br>Key Looks Page<br>Brand Page<br>Fits Page<br>Info Page | display-navbar<br>home-page<br>mens-sale (sale-item-inventory.service)<br>womens-sale (sale-item-inventory.service)<br>sale-item-detail  (sale-item-inventory.service)<br>key-looks-page<br>brand-page<br>fits-page<br>info-page |


## Setup/Installation Requirements
* To view project, view in browser https://william-chu.github.io/epicodus-week8-9/
* To view project code, clone repository from https://github.com/william-chu/epicodus-week8-9/ and proceed to Node.js Prerequisites and Firebase Setup

### Node.js Prerequisites
* Install Node.js https://nodejs.org/en/
* Install Node Angular Cli package, open terminal and run `npm install -g @angular/cli` https://cli.angular.io/
* Install Node TypeScript package, open terminal and run `npm install typescript -g`
* (Optional for Atom users) Install Atom TypeScript package, open terminal and run `apm install atom-typescript`
* Open terminal, navigate to project root folder and run `npm install`

### Firebase Setup
* Navigate to https://firebase.google.com/
* In console view click + Add project
* Enter project name and country then click Create Project
* Go to Firebase project page and click Add Firebase to your web app
* Copy the following section of data from the window that opens:<br><br>
  &nbsp;&nbsp;&nbsp;&nbsp;apiKey: "",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;authDomain: "",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;databaseURL: "",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;projectId: "",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;storageBucket: "",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;messagingSenderId: ""<br><br>
* Open cloned project folder and create file src/app/api-keys.ts
* Go to api-keys.ts file and enter the following with the information from your Firebase project<br><br> export const masterFirebaseConfig = {<br>
  &nbsp;&nbsp;&nbsp;&nbsp;apiKey: "",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;authDomain: "",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;databaseURL: "",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;projectId: "",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;storageBucket: "",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;messagingSenderId: ""<br>
};<br><br>
* Go back to project page in Firebase and click Database under Develop on the left sidebar
* Go to Realtime Database and click Get Started, toggle Start in test mode and click Enable
* Click the vertical ellipsis icon to the right of the + - icons and select Import JSON
* Browse to the project folder src/app/firebase-data.json file and click Import
* To view project in development mode, navigate to project root folder and run `ng serve --open`

## Known Bugs

## Technologies Used

* CSS _(Bootstrap 4.1)_
* JavaScript
* TypeScript
* Angular
* Node.js


## License

* GPL

William Chu © 2018

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
