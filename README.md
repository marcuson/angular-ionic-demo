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

### Ionic Framework

Excerpt from Ionic v4 introduction web page (check full page at
https://beta.ionicframework.com/docs/intro):

> Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and
> desktop apps using web technologies (HTML, CSS, and JavaScript).

> Ionic Framework is focused on the frontend user experience, or UI interaction of an app (controls,
> interactions, gestures, animations). It’s easy to learn, and integrates nicely with other
> libraries or frameworks, such as Angular, or can be used standalone without a frontend framework
> using a simple script include.

> Currently, Ionic Framework has official integration with Angular, but support for Vue and React
> are in development.

### Ionic Native

Excerpt from Ionic v4 dosc (check full page at https://ionicframework.com/docs/native/):

> Ionic Native is a TypeScript wrapper for Cordova/PhoneGap plugins that make adding any native
> functionality you need to your Ionic mobile app easy.

### Ionic Capacitor

Excerpt from Ionic Capacitor introduction web page (check full page at
https://capacitor.ionicframework.com/docs/):

> Capacitor is a cross-platform app runtime that makes it easy to build web apps that run natively
> on iOS, Android, Electron, and the web. We call these apps "Native Progressive Web Apps" and they
> represent the next evolution beyond Hybrid apps.

> Capacitor provides a consistent, web-focused set of APIs that enable an app to stay as close to
> web-standards as possible, while accessing rich native device features on platforms that support
> them. Adding native functionality is easy with a simple Plugin API for Swift on iOS, Java on
> Android, and JavaScript for the web.

> Capacitor is a spiritual successor to Apache Cordova and Adobe PhoneGap [...]. Capacitor has
> backwards-compatible support for many existing Cordova plugins.

> Getting started with Capacitor is easy! Capacitor can be used as a drop in to any existing modern
> JavaScript project, or used to create a fresh Capacitor project from scratch.

### Ionic DevApp

Excerpt from Ionic Pro docs (check full page at https://ionicframework.com/docs/pro/devapp/ and
don't worry, even if in the Pro section, the app is free :wink:):

> The Ionic DevApp is a free app that makes it easy to run your Ionic app directly on your iOS or
> Android device.

> Skip dealing with frustrating Native SDK installation issues, just run ionic serve -c, open the
> DevApp, connect to the same network, and the app will automatically load and run your app.

> The DevApp comes with many native plugins built right in, so you don’t need to worry about
> installing plugins.

### Want more?

The Ionic team is offering some paid features and developing some other kick-ass projects you might
want to check out:

- [Stencil](https://stenciljs.com/): build reusable web-components adhering to recent Web standards.
- [Ionic Creator](https://ionicframework.com/pro#prototyping): online WYSIWYG tool for rapid app
  prototyping.
- [Ionic Deploy](https://ionicframework.com/pro#updates): hot code updates/bugfixes for your app.
- [Ionic Package](https://ionicframework.com/pro#build): build your app in the cloud for all major
  platforms (no more need to buy a Mac to build for iOS :clap:).
- [Ionic Monitor](https://ionicframework.com/pro#reporting): runtime error monitoring to deliver
  bug-free app.

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

NOTE: Tested only for Android build (I don't have a Mac sorry :stuck_out_tongue:).

- **Serve locally**: run `npm run mobile:serve`, app listens on port `4005` via browser, browser can
  emulate iOS and Android platforms on port `8200`, or the live server can be accessed
  via [Ionic DevApp](https://ionicframework.com/docs/pro/devapp/) installed on your mobile (only if
  you are on the same network!).
- **Build**:
  1. run `npm run mobile:build:dev`, `npm run mobile:build:rc` or
     `npm run mobile:build:prod` according to the environment you want to build for.
  2. go into `android` directory (`cd ./android`) and run `./gradlew assembleDebug` (Android
     specific, debug build). An APK will be created under `./android/app/build/outputs/apk/debug`
     directory, which you can install on your mobile.
