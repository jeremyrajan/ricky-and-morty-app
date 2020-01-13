## API
url: `/characters`

> Allows for pagination via `page` query parameter. By default its page 1.

One of the main reasons, I came up with the aggregator API is to get the episode information in the same call as characters. What I saw in the original API was, characters were on a different API compared to episodes. This atleast allows for single call, which helps me get the all info to display.

Written in typescript, its divided in 2 sections:

1. **characters.ts** : Responsible for getting the data, aggregating the episode information and handle pagination.
2. **utils.ts** : Simple wrapper to get the episode data for array of episode numbers

### Dev

The `/api` is automatically activated when you run `npm start` from the project folder. So there is no need to run extra script to get the api running. Thanks to zeit!

### Improvements

1. Currently the episode data is retrieved everytime we are loading the character pages. Would be nice to have a caching mechanism for all episodes so thats easier and faster to lookup.