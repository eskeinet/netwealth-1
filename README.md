# Task 1
Using Angular, write the interacting elements (including Unit Tests) required to obtain data from the following RESTful API and display it on the page following your usual best practices.

https://netwealthonlinetests.azurewebsites.net/clients/{id}

# Solution
Please check https://github.com/eskeinet/netwealth-1/tree/net-wealth-1/src/app/client for the solution.

# Task 2
  You are given a single 1-dimensional array of historical daily prices for a particular stock; one per day, in chronological order. Write an efficient algorithm that would have maximised your profit by executing exactly 4 trades. You may trade multiple times per day, but they must still alternate between buying and selling. Your output should indicate the days you traded and the net profit after all 4 trades have completed.

  Note: A trade is defined as either buying or selling a single unit of that stock at that day’s price

  This is your function definition:

  function  getMaximumProfit(arrayOfDailyPrices: number[], numberOfTrades: number): { tradeDays: number[], profit: number }

  Example 1: getMaximumProfit([1,12,3,5], 4) returns { tradeDays: [0, 1, 2, 3], profit: 13 }
  Example 2: getMaximumProfit([1,2,3], 4) returns { tradeDays: [0, 2, 2, 2], profit: 2 }
  Example 3: getMaximumProfit([4,3,2,1], 4) returns { tradeDays: [0, 0, 0, 0], profit: 0 }
# Solution
I've implemented an algorithm:
https://github.com/eskeinet/netwealth-1/blob/net-wealth-2/src/app/trading.service.ts

That passes the tests specified in the task description.
https://github.com/eskeinet/netwealth-1/blob/net-wealth-2/src/app/trading.service.spec.ts 

The algorithm isn't perfect. It should be updated to take this case in consideration. Possibly by using recursion between already found trade intervals.

getMaximumProfit([1, 11, 2, 12], 4);

But that's outside the scope of this problem.
# Task 3

What questions would I ask the client wanting to implement update address screen?

It depends on the state of existing app.
I assume the app has screens that save customer address during registration, and a screen where the customer can view their current address.

I would create quick mockup by combining screenshots the two in image editing application. Then print it out. I would make adjustments with a pen to the navigation. Then I would present the result to the client asking:
"Is this what you have in mind?"
This would allow me find out if we are on the same page. Depending on their answer I would make notes and adjustments on this initial, paper prototype to narrow it down further.

Then I would ask them by what date they need the changes to be done.

Depending on the answer and the workload I would ask them if about the additional features such as:
- address history
- ability to have multiple shipping billing addresses
- improvements to the existing form responsible for saving customer address

Then I would ask them how would they want to use this data, and go through similar process with updating the admin/client's panel.

# BasicApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
