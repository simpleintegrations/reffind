
# Reffind Tech Task
I have chosen to build the solution in ReactJS as I know this well and feel it will demonstrate my skills at organising code without the need to spend time learning a new framework and any unique structuring techniques in that other framework.

## chucknorris.io 
In some preliminary testing of the chucknorris.io site, it was found that the site does not support Access-Control-Allow-Origin header to allow any origin. While this can be addressed in a browser (like Chrome) using specific add-ons or flags, it does present issues in a headless testing environment.

Therefore, the tests created during the initial coding have been reduced to take this into account.

## Use of create-react-app
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The tech task was not specific about the build environment or any boilerplate requirements for the particular chosen framework. So, to save time in setting for hot-loading, and basic package inclusions I have chosen to use __create-react-app__.

Were I to have chosen one of the other nominated frameworks (Ember or Angular) I would have also used a similar type of bootstrap script to get up and running quickly.

#### registerServiceWorker
create-react-app provides a background service worker to enable hot-reloading in production.

As this application is not being deployed to production, the service worker used to provide cacheing for create-react-app will be disabled.

There are also other considerations with regard to disabling this that can be viewed at the following page: https://goo.gl/KwvDNy

## Additional NPM Packages Used
- axios - for retrieving the the data from the site

## User Interface Requirements
I am repeating the UI requirements here to ensure that none of them are missed and can serve as documentation to the project:

- [ ] Do a free text search
- [ ] Get a random joke based on a category
- [ ] The user will be shown a list of categories to click on to retrieve the random fact

## Web Deployment
The tech task did not specify any type of web deployment for the project so none has been provided.  Please refer to the next section in regard to running the solution.

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
- animated-ninja-image-0002.gif sourced from www.animatedimages.organising
