# Gistology

An app to record the best gists that make life easier.
A starter app using **MEAN, Angular 5, Angular-Material & Socket.io**.

https://gistology.herokuapp.com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1 and updated to use 1.6.7.

## Demo
- [Link](https://gistology.herokuapp.com)
- [Video](https://youtu.be/ivvVqm-xkJQ)

## Getting Started

After getting the source code, it is recommanded to read the full article on medium that describes at a glance this project:
[Build a real time & MD app with Angular2, AngularCli, AngularMaterial2 & Socket.io](https://medium.com/@dassiorleando/build-real-time-app-with-mean2-angular-cli-and-socket-io-cedf1dc02fec)

## Features

### Done
- Architecture
- Material Design
- CRUD of gist via rest
- Real time Notification using socket.io


### To DO
- ~~Update the stack~~
- Some validations on UI and Server
- CRUD of gist using socket.io
- Write tests
- Authentication & authorization
- Setup **continuous integration build** and **semantic release**

## Installing

1. git clone https://github.com/dassiorleando/gistology
2. Be sure your node and npm version is compatible, there is used: node(>= 8.9.0) & npm(>= 5.5.1)
3. ```npm install```
4. Install mongod and run it
5. ```ng serve``` to fire the frontend app, the Livereload will be enable as well
6. ```node index.js``` to run the backend, it's possible to do ```ng build``` if you want both to work with the same backend port
7. Access the frontend at `http://localhost:4200` and the Backend `http://localhost:3000`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org).
Before running the tests make sure you are serving the app via `ng serve`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Built With
- MEAN(Angular5)
- AngularCli
- Typescript
- Socket.io
- AngularMaterial2
- AngularFlexLayout
- Angular2Toaster
- Mongoose

## Contributing

We accept pull requests :)
No contributing guide published yet

## [Versioning](https://github.com/dassiorleando/gistology/releases)
- The initial version with Angular2: 0.0.1
- Current version: Angular5

## Authors
- [Dassi Orleando](https://github.com/dassiorleando) - Main developer

See also the list of [contributors](https://github.com/dassiorleando/gistology/contributors) who participated in this project.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
