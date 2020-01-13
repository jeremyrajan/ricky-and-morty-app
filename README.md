# Ricky And Morty App
<img src="https://github.com/jeremyrajan/ricky-and-morty-app/workflows/Node CI/badge.svg">

Web: [https://ricky-and-morty-app.jeremyrajan.now.sh/](https://ricky-and-morty-app.jeremyrajan.now.sh/)

API: [https://ricky-and-morty-app.jeremyrajan.now.sh/api/characters](https://ricky-and-morty-app.jeremyrajan.now.sh/api/characters)

## About
Based of https://rickandmortyapi.com/. The app tries to achieve listing all the characters with pagination. I had to create a separate microservice to aggregate the episode details for each character. The details for that can be found here [Ricky and Morty Aggregator API](api/README.md).

## Architecture
Consists for following components:

1. **Card**: Displays character data (image, name, species, gender etc)
2. **List**: Container for the cards. Currently its a simple wrapper component.
3. **Loader**: Loader shown during api calls.
4. **Modal (Dialog)**: Shows episode information.
5. **Home Page**: Gets the character data, and handles the next/prev calls.

(Rough sketchup below)
![image](https://user-images.githubusercontent.com/2890683/72269783-20e6a180-365f-11ea-851e-97753ab08915.png)

## Dev

In order to have a single setup + run script both for development and deployment, I am using now.sh with serverless functions to host the API's. An example can be found here: https://github.com/zeit/now/tree/master/examples/create-react-app. Essentially, all `/api` calls will be redirected to the serverless functions and rest of the APP will be hosted.

1. Clone the repo.
2. `npm install`
3. `npm start`

### Caveats
Since we are trying to run a single setup using `now`, the reload seems to have a problem when doing development. Its addressed in the issue here: https://github.com/zeit/now/issues/3451.

## Tests
I have to tried to add tests on main components especially the home page and cards. Latest build results can be found here (https://github.com/jeremyrajan/ricky-and-morty-app/actions).

## Deployment
I am a great fan of [ziet.co](zeit.co). I have setup integration with `now.sh`, which gets autodeployed.