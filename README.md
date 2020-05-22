<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Working in memory CRUD data

**Language**: TypeScript and pure JavaScript

**Prerequisites**: Please make sure that Node.js (>= 10.13.0) is installed on your operating system.

**Setup**:

```bash
  $ npm i -g @nestjs/cli
  $ nest new product-catalog
```

The project directory will be created, node modules and a few other boilerplate files will be installed, and a src/ directory will be created and populated with several core files.


src

  -- app.controller.ts

  -- app.module.ts

  -- main.ts

-------------------------------

**Core files**

**app.controller.ts**: Basic controller sample with a single route.

Controllers are responsible for handling incoming requests and returning responses to the client

**app.module.ts**: The root module of the application.

**main.ts**: The entry file of the application which uses the core function NestFactory to create a Nest application instance.

To create a Nest application instance, we use the core NestFactory class. NestFactory exposes a few static methods that allow creating an application instance. The create() method returns an application object, which fulfills the INestApplication interface

**Provider**:

Providers are a fundamental concept in Nest. Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on
The main idea of a provider is that it can inject dependencies; this means objects can create various relationships with each other

**Services**:

This service will be responsible for data storage and retrieval, and is designed to be used by the ProductController, so it's a good candidate to be defined as a provider. Thus, we decorate the class with @Injectable().


-----------------------------







### app module
Don't forget to add Product module to the app module's import array

![app modeule](https://github.com/ishaileshmishra/product_catalog_nestjs/blob/master/assets/app_module.png?raw=true)

### product_controller

![product_controller](https://github.com/ishaileshmishra/product_catalog_nestjs/blob/master/assets/product_controller.png?raw=true)

### products_module

![product_module](https://github.com/ishaileshmishra/product_catalog_nestjs/blob/master/assets/products_module.png?raw=true)

### product_service

![product_service](https://github.com/ishaileshmishra/product_catalog_nestjs/blob/master/assets/product_service.png?raw=true)

### product_model

![product_model](https://github.com/ishaileshmishra/product_catalog_nestjs/blob/master/assets/product_model.png?raw=true)

### License

  Nest is [MIT licensed](LICENSE).
