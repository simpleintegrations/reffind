
# Reffind Tech Task
I have chosen to build the solution in ReactJS as I know this well and feel it will demonstrate my skills at organising code without the need to spend time learning a new framework and any unique structuring techniques in that other framework.

## chucknorris.io 
In some preliminary testing of the api.chucknorris.io site, it was found that the site was not supporting the Access-Control-Allow-Origin header to allow any origin. While this can be addressed in a browser (like Chrome) using specific add-ons or flags, it does present issues in a headless testing environment.

Therefore, the tests created during the initial coding have been reduced to take this into account.

__UPDATE__

There must have been an issue with the api.chucknorris.io site when I first started the assignment. It seems that I am now able to access the site through browser API calls without any requirement to tweak the browser in any way. I'll be reviewing the tests to see if they can now be expanded.

The tests have now been expanded to call the site and check for reasonable results.

## Use of create-react-app
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The tech task was not specific about the build environment or any boilerplate requirements for the particular chosen framework. So, to save time in setting for hot-loading, and basic package inclusions I have chosen to use __create-react-app__.

Were I to have chosen one of the other nominated frameworks (Ember or Angular) I would have also used a similar type of bootstrap script to get up and running quickly.

## Additional NPM Packages Used
- axios - for retrieving the the data from the site

## User Interface Requirements
I am repeating the UI requirements here to ensure that none of them are missed and can serve as documentation to the project:

- [x] Do a free text search
- [x] Get a random joke based on a category
- [x] The user will be shown a list of categories to click on 

## Assessment Criteria
The following are the documented assessment criteria from the assignment:

- [x] How you componentise your application
- [x] How and where you fetch your data
- [x] How and where you handle your application state
- [x] Consistency
- [x] Attention to detail
- [x] Adherence to standards
- [x] Adequate tests
- [x] A decent commit history
- [x] A great user experience

## Web Deployment
The fully operational site is deployed to github pages at http://simpleintegrations.github.io/reffind.

## Running the Project
- have `npm` or `yarn` installed globally
- clone the repository to your local dev machine
- change to the directory where you cloned the repo
- use `npm start` or `yarn start` to run the application
- navigate to localhost:3000 to view the application
- the environment watches for changes

## Running the Tests
- have `npm` or `yarn` installed globally
- clone the repository to your local dev machine
- change to the directory where you cloned the repo
- use `npm test` or `yarn test` to run the tests
- the tests runner watches for changes
- view the output in the console

## Component Structure
TBD

## Styling
TBD

## Testing
TBD

## Architectural Description
TBD

## Attribution
- animated-ninja-image-0002.gif sourced from http://www.animatedimages.org
- oops.gif sources from https://sh-illustration.deviantart.com/art/Ninja-Fail-458139192
- wise_ninja.gif from https://giphy.com/stickers/spy-kids-tULYT0Nx2pkWI
- ninja_fetching.gif from http://aks.roshd.ir/photos/8.1671.medium.aspx
