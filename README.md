# product-catalog-nestjs

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
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://twitter.com/ishailesmishr"><img src="https://img.shields.io/twitter/follow/ishailesmishra.svg?style=social&label=Follow"></a>
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

**Language**: TypeScript and pure JavaScript

**Prerequisites**: Please make sure that Node.js (>= 10.13.0) is installed on your operating system.

**Setup**:

```bash
  # To scaffold the project with the Nest CLI, run the following commands
  $ npm i -g @nestjs/cli
  
  # Creating a product-catalog project with the Nest CLI
  $ nest new product-catalog
```

The project directory will be created, node modules and a few other boilerplate files will be installed, and a src/ directory will be created and populated with several core files.

```bash
  src
    > products
    -app.controller.ts
    -app.module.ts
    -app.service.ts
    -main.ts
```

## **Core files**

**app.controller.ts**: Basic controller sample with a single route. Controllers are responsible for handling incoming requests and returning responses to the client

**app.module.ts**: A module is a class annotated with a @Module() decorator. The @Module() decorator provides metadata that Nest makes use of to organize the application structure.

**Services**: This service will be responsible for data storage and retrieval, and is designed to be used by the ProductController, so it's a good candidate to be defined as a provider. Thus, we decorate the class with @Injectable().

**main.ts**: The entry file of the application which uses the core function NestFactory to create a Nest application instance. To create a Nest application instance, we use the core NestFactory class. NestFactory exposes a few static methods that allow creating an application instance. The create() method returns an application object, which fulfills the INestApplication interface

**Provider**: Providers are a fundamental concept in Nest. Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on
The main idea of a provider is that it can inject dependencies; this means objects can create various relationships with each other

### app module

Don't forget to add Product module to the app module's import array

## CRUD Operation using [Mongo DB]

```bash
install mongoose by running below command in your terminal in your project dir

npm install --save mongoose @nestjs/mongoose
npm install --save-dev @types/mongoose
```

### See the terminal

```bash
#Run Below command to run the app on dev:

> npm run start:dev
```

![Test Image 4](https://github.com/ishaileshmishra/product-catalog/blob/master/assets/output_terminal.png?raw=true)
