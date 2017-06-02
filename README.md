# Gistology

An app to record the best gists that make life easier.
A starter app using **MEAN2** + **Socket.io**

https://gistology.herokuapp.com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

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
- Some validations on UI and Server
- CRUD of gist using socket.io
- Write tests
- Update angular-cli generator to allow to generate a crud using socket.io
- Setup **continuous integration build** and **semantic release**

## Installing

1. git clone https://github.com/dassiorleando/gistology
2. Be sure your node and npm version is compatible, there is used: node(6.10.2) & npm(4.5.0)
3. ```npm install```
4. Install mongod and run it
5. ```ng build``` & ```ng serve```(frontend work): Livereload will be enable here for front
6. ```ng build``` & ```node index.js```(frontend + backend work)
7. For frontend work  access the app at `http://localhost:4200` and for B and F, go here: `http://localhost:3000`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org).
Before running the tests make sure you are serving the app via `ng serve`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Built With
- MEAN(Angular2)
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

## Versioning
0.5.0

## Authors
- [Dassi Orleando](https://github.com/dassiorleando) - Initial work

See also the list of [contributors](https://github.com/dassiorleando/gistology/contributors) who participated in this project.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
