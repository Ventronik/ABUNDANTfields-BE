# ABUNDANTfields (Backend)

This is the backend of the project.
The front ends can be found at:
* https://github.com/Ventronik/ABUNDANTfields

ABUNDANTfields is a web platform for farmers to connect to landowners and rent agricultural land. Landowners can create fields of any polygonal shape to put up for rent. Users can then cruise field listings for a field to rent.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* fork and clone this repository

### Installing

A step by step series of examples that tell you how to get a development env running to utilize the PostGres db

Install the Node dependencies:

```shell
* run npm install
```

Create the development database:

```shell
* createdb abundantfields
```

and run migrations and seeds:

```shell
* npm run knex migrate:latest
* npm run knex seed:run
```

Finally, start the server in development mode:

```shell
* npm run dev
```
<!--
Check that you can GET the `/api/customer/shops` endpoint.  If you receive a 200 from the server your up and running. -->


<!-- ## Deployment

This project has been deployed on Heroku at the address: https://dashboard.heroku.com/apps/coffee-base -->

## Built With

* [JavaScript](https://www.javascript.com/) - The language
* [Bootstrap](https://bootstrap.com/) - The css framework used
* [React](https://reactjs.org/) - Frontend library
* [Redux](https://redux.js.org/) - State container
* [postgreSQL](https://www.postgresql.org/) - database
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Node](https://nodejs.org/en/) - Package ecosystem

## Author

* **Dustin Ruskell** - *Initial work* - [Ventronik](https://github.com/Ventronik/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
