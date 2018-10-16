# Angular Ionic Demo

## Technologies

### Preface

This project has been created via [Angular CLI](https://cli.angular.io/), so you can exploit its
commands to build for web. In `package.json` you can find some scripts to invoke the most common
CLI commands (check the one starting with `web:`).
Ionic team also offers its own CLI, namely [Ionic CLI](https://ionicframework.com/docs/cli/), to
scaffold a project.
For UI/UX [Ionic framework](https://ionicframework.com/) has been used, for both web and mobile
version, to achieve a full sharing of the codebase.
Access to native mobile functionalities is granted via
[Ionic Capacitor](https://capacitor.ionicframework.com/) (more on this below), but one can also
choose to use plain old Cordova.

### Ionic framework

What is Ionic Framework, excerpt from Ionic v4 introduction web page (check full page at
https://beta.ionicframework.com/docs/intro):

> Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and
> desktop apps using web technologies (HTML, CSS, and JavaScript).

> Ionic Framework is focused on the frontend user experience, or UI interaction of an app (controls,
> interactions, gestures, animations). It’s easy to learn, and integrates nicely with other
> libraries or frameworks, such as Angular, or can be used standalone without a frontend framework
> using a simple script include.

> Currently, Ionic Framework has official integration with Angular, but support for Vue and React
> are in development."

### Ionic DevApp

### Ionic Capacitor

## Developer section

### Prerequisites

- Node and npm installed (tested with version 8.11.4 and 6.4.0)
- Java installed (for Android builds, tested with version 1.8.0_181)
- run `npm i` on project root to install all required deps

### Web

- **Serve locally**: run `npm run web:serve`, app listens on port `4005` via browser.
- **Build**: run `npm run web:build:dev`, `npm run web:build:rc` or `npm run web:build:prod`
  according to the environment you want to build for.

### Mobile

NOTE: Tested only for Android build (I don't have a Mac sorry :P).

- **Serve locally**: run `npm run mobile:serve`, app listens on port `4005` via browser, browser can
  emulate iOS and Android platforms on port `8200`, or the live server can be accessed
  via [Ionic DevApp](https://ionicframework.com/docs/pro/devapp/) installed on your mobile (only if
  you are on the same network!).
- **Build**: run `npm run mobile:build:dev`, `npm run mobile:build:rc` or
  `npm run mobile:build:prod` according to the environment you want to build for.
