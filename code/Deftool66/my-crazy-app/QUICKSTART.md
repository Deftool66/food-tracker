# QUICKSTART

Use this guide to get started quickly

## Start the client

`yarn start`

Test the client by going to [http://localhost:3000/](http://localhost:3000/)

## Start the server

`yarn start-server`

- Test the API by going to [http://localhost:9095/api/health](http://localhost:9095/api/health)

## Development

### Client

- Basics
  - The app is bootstrapped using `src/index.js`
  - Routes are defined in `src/routes.js`
  - Entry point is definied in `src/app.js`
- Redux. The app comes with redux built in. 
  - Reducers are defined in `src/reducers.js`
  - Actions are defined in `src/actions.js`
  - Sagas are defined in `src/sagas.js`

### Server

- Basics
  - The app is bootstraped using `src/server/index.js`
  - It uses node.js and express

That's it!

For more information on create-react-app, refer to the [readme](./README-CREATE-REACT-APP.md)
