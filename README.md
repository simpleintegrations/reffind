
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

## UI Design
I took the broad description in the brief to try and bring a "fun" feeling to the site with some Ninja graphics (due to the association of Chuck Norris with martial arts).  That also lead to a decision to bring in some asian scenery to bring a more colourful feel to the tiles.  Where the source of the images used was obvious, appropriate [attribution](#attribution) has been provided at the bottom of the README.

The default page and CSS supplied with `create-react-app` was largely reused untouched.  The heading area was reduced in size to optimise the space for the main content. The rest of the design was built from scratch (HTML and CSS) including the styling of the tile `<div>s` into button-like elements.

Animated GIFs were used in place of common "spinner" images to provide more theme-based interest.

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
The components are stored in the `import` directory and loaded via the ES6 `import` directive.

There are three top level folders for the components with descriptions of the contents nested underneath:
- __api__ - contains packages that provide middle layer functionality (such as access to the api.chucknorris.io site)
  - __chucknorris-io__ - the package and tests for access to the api.chucknorris.io site
- __component__ - contains the UI components
  - __buttonttile__ - the basic tile used for categories (this is reusable)
  - __chucknorris-page__ - the "root" component for the project
  - __common__ - small, pure components that have multi-reuse throughout the project
  - __tileset__ - the basic wrapper for a set of `buttontile` components
- __css__ - contains a css import package (although this was not used for the core UI styling due to the decision to host the solution on gh-pages and to make that process simpler)

A package/component is housed in a directory with it's root code included in an `index.js` file. This allows the imported component to then import any addition packages that it may require from the same folder. 

The following list attempts to represent the nested nature of the core UI components (psuedo code - React only: no props, no ancillary HTML tags, no transitory components):

- `<ChuckNorrisPage>`
  - `<Results ... />`
    - `<ChuckFacts ... />`
  - `<Instructions ... />`
  - `<SearchInput ... />`
  - `<TileSet ... />`
    - `<ButtonTile ... />`
- </ChuckNorrisPage>

The component root files all implement `export default <ComponentName>` - where `<ComponentName>` is the name of the component to export as the default for the package. This means it can be renamed in the package performing the `import`.  However, the name is generally left the same as the exported name to make it simpler to find related code by searching the code base.

There is potential to refactor the `<SearchInput />` component further by breaking out the `<input>` and `<button>` tags but, on consideration, the higher level component is already small enough to be considered complete as a single unit with no real benefit (and possibly detriment) to further dissection.

Another possibility would be to call the `<TileSet />` component `<Categories />` in the root page component. The benefit to doing this would be to potentially make it clearer what the purpose of the component is but the props pass make that reasonably clear.

## Styling
Aside from the default shell styling of create-react-app (modified slightly for the project), there is a chucknorris.css file in the public folder that contains detailed styling for the various nested pieces.

At a top level, all the class names are prefixed with `chuck-` and nesting within that done as simple names cascading under the root class name.

The stylesheet has been included in the root `index.html` file to ensure that all the resources are easily accessing on `gh-pages`.

## Testing
The tests focus on the `chucknorris-io` component. There was a considerable struggle doing the pre-development/prototyping research on the site due to some issue with cross-site scripting.

## Documentation
Much of the documentation was written during the pre-code/prototyping stage and evolved during the project. The final pieces of the documentation (Component Structure, Styling, Testing and this section) were completed last.

The React code is largely left uncommented as the approach takes a very standards-based approach to building a small React application.  The component structure is documented [elsewhere](#component-structure) in this README and should serve as a guide to a coder familiar with React.

The `chucknorris-io` API package has more inline comments to provide an overview of what each function expects as parameters and what is returned.

## Attribution
- animated-ninja-image-0002.gif sourced from http://www.animatedimages.org
- oops.gif sources from https://sh-illustration.deviantart.com/art/Ninja-Fail-458139192
- wise_ninja.gif from https://giphy.com/stickers/spy-kids-tULYT0Nx2pkWI
- ninja_fetching.gif from http://aks.roshd.ir/photos/8.1671.medium.aspx
