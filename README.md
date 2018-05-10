# Singtel Progress Bars Test

Practice app for Singtel
Simple web application with react, hot-reload, sass.

The project uses Webpack for building production ready bundles and Jest for testing.

## How to use
Please make sure you have the stable and/or the latest version of Node(including NPM).

1. Clone the directory.
2. Run "npm install" to install all modules needed for the application

Run "npm start" to start dev server with hot reload including SASS preprocessing, it's live on `localhost:3000`.

Run "npm run build" to build prod bundle, it includes both treeshaking and uglify to optimize the code as much as possible.

Run "npm test" to run the tests with Jest and Enzyme, by default the test included only check for the correct render of base components & routes, all are passing.

## Tests

The testing environment is written in Jest and Enzyme.
The included tests are very basic and only check the proper render of base components + routes, there are no snapshot tests, I did not feel they were needed being the components really basic, at the first change they would need to be updated, imho setting the wrong approach of _"hey tests are broken, let's regenerate snapshots again"_.
While still basic, the default tests are easy to manage and expand, providing a smoother curve into testing with JavaScript and React.


## Eslint

This project uses AirBnB Javascript specs so you can write error-free react and javasctipt code, if you use Visual Studio Code, you can install eslint from the extension tab to activate this function, other editors just google _name of the editor + eslint_ you will find how to enable it for your editor.

## How to contribute

I wrote a [small guide](https://medium.com/@francesco.agnoletto/how-to-not-f-up-your-local-files-with-git-part-1-e0756c88fd3c) on how to contribute and the common etiquette to follow.



