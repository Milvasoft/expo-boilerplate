<h2 align="center">Expo Boilerplate Project</h2>

<br>

<h3 align="center">Architectures, methods and much more that We use while developing mobile applications</h3>

<br>


![](https://i.hizliresim.com/12q7jh2.gif)


<br>

## Run project in development

- Setting up the development environment: https://reactnative.dev/docs/environment-setup.

- Install dependencies: `expo install` ( `yarn install` or `npm install`).
 
- Run on both Android & iOS: `expo start` (or `yarn start`).

- Run on Android: `yarn android` (or `npm run android`).

- Run on iOS: `yarn ios` (or `npm run ios`).

- ✨ Don't forget to enable eslint ✨

<br>

***

<br>

<h2 align="center">Folder Architectures</h2>

<br>

## Assests

Assests used in the project.
<br>
Sample: color, images, svg etc...

<br>

## Components

Components Folder containing base components in the project.
<br>
Sample: ToastMessage etc..

<br>

## Helpers

Helpers Folder containing base functions in the project.
<br>
Sample: storage işlemleri, component dışından redux 'a erişim etc...

<br>

## Hooks
Hooks Folder containing base hooks in the project.
<br>
Sample: useTheme etc...

<br>

## Modules
The Modules is a special folder. It allows you to manage your application more easily by dividing it into modules according to business logic.

 Modules have their own files inside;

- Component (CustomButton, CustomLayout etc..)
- Redux (Actions, Reducers, Store etc...)
- Utils (Type etc.. )
- API (API request, routes)
- Services 

In this way, it provides a simpler and easier development process by searching the codes related to the Module only in that folder.
<br>

## Providers
Providers Folder containing base providers and container in the project.
<br>
Sample: ThemeProvider, Localization etc...

<br>

## Routers
Everything about routing.

<br>

## Screens
The folder where the pages in the application are located. Stack-based grouping simplifies management.
<br>
Sample: ProfileStack { Profile, Post, Settings } ..etc

<br>

## Utils
Utils Folder containing base utils and container in the project.
<br>
Sample: Routes Type, Network etc..

