# Facebook Hackathon Project

Repository for Facebook Hackathon (Progressive) Web App

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Please make sure that you have installed **NodeJS**. And then you have installed **serve** globally with `npm i -g serve` to view generated page after running `npm run build && serve -s build` command.

### Installing
1. Clone this repo, e.g. `git clone https://github.com/devcjakarta/facebook-hackathon.git facebook-hackathon`. It will create `facebook-hackathon` folder
2. Change directory to the created folder in previous step, e.g. `cd facebook-hackathon`
3. Install node packages with `npm i` command.

## Development
Type `npm start` to bundle files in development mode. It will create local server with domain `http://localhost:3000`.  

## Running the test
Create test-related files with format `${fileName}.test.js`. Then type `npm run test` to testing your web app.

## Deployment
With `npm run build` command, it can generated production version which has more optimization and have less size files. After that, please type `serve -s build` to view that page with domain `http://localhost:5000`.

## Built with  
* **create-react-app** to create react-based web app with no build configuration.
* **semantic-ui-react** to integrate Semantic UI with React.
* **react-snapshot** to support pre-render.
* **react-social-login** to allow developers to use HOC (High Order Component) which provides social login through multiple providers.
* **node-sass-chokidar** to enable css preprocessor in create-react-app project with faster performance than `node-sass`.
