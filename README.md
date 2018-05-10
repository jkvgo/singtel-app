# Singtel Progress Bars Test

Practice app for Singtel
Simple web application with react, hot-reload, sass.

The project uses Webpack for building production ready bundles and Jest for testing.

## How to use
Please make sure you have the stable and/or the latest version of Node(including NPM).

1. Clone the directory.
2. Run "npm install" to install all modules needed for the application
In the event of an error in npm install regarding node-sass simply run "npm install --save-dev node-sass" should you want to use this in dev mode and add changes

Run "npm start" to start dev server with hot reload including SASS preprocessing, it's live on `localhost:3000`.

Run "npm test" to run the tests with Jest and Enzyme, by default the test included only check for the correct render of base components & routes, all are passing.

Run "npm run build" to build prod bundle, it includes both treeshaking and uglify to optimize the code as much as possible. Once you execute this command, the prod versions will automatically be created inside the build folder (PROD optimized with minimal HTTP calls and uglified/minified/linted)