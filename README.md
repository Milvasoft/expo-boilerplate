<h1 align="center">Expo Boilerplate</h1>

<h4 align="center">Architectures, methods and much more that We use while developing mobile applications</h4>

<br>

![milva-bird](https://user-images.githubusercontent.com/13048645/141461853-dbacad32-2150-4276-a848-45b81f2eeeb2.jpg)

- [Boilerplate Features](#Boilerplate-Features)	
- [Structure](#Structure)
	- [Assets](#Assets)
	- [Components](#Components)
	- [Helpers](#Helpers)
	- [Hooks](#Hooks)
	- [Modules](#Modules)
	- [Providers](#Providers)
	- [Routers](#Routers)
	- [Screens](#Screens)
	- [Utils](#Utils)
- [Run in Dev Environment](#Run)
- [Code Push](#Push)
- [Run Expo Go](#ExpoGo)
- [Expo Project Link](#ExpoProjectLink)

<br>

<a id="Boilerplate-Features"></a>
## Boilerplate Features:

* Routing
* Theme
* Network
* Local Storage
* Redux
* Provider example
* Notifications
* Dark Theme Support
* Multi Language Support 
* Folder Structure
* TypeScript
* Eslint 
* Font
* Splash
* Code Push
* Toast Message

<br>

<a id="Structure"></a>
# Expo Boilerplate Structure

```
src
 ├── assets
     ├── animation
     ├── color
     ├── enums
     ├── images
     └── localization
 ├── helpers
     └── storage
 ├── components
 ├── hooks
 ├── modules
     └── app
         ├── api
         ├── components
         ├── redux
         ├── services
	 ├── types
         └── utils
     └── profile
         ├── api
         ├── components
         ├── redux
         ├── services
	 ├── types
         └── utils	 
 ├── providers
 ├── routers
     └── components
 ├── screens
     ├── stack-1
     ├── stack-2
     └── stack-3
 └── utils
     └── network
```

<a id="Assets"></a>
# Assets

Assets used in the project.
<br>
Sample: color, images, svg etc.

<br>

<a id="Components"></a>
# Components

Components Folder containing base components in the project.
<br>
Sample: ToastMessage etc.

<br>

<a id="Helpers"></a>
# Helpers

Helpers Folder containing base functions in the project.
<br>
Sample: storage process, redux management from out of components etc.

<br>

<a id="Hooks"></a>
# Hooks
Hooks Folder containing base hooks in the project.
<br>
Sample: useTheme etc.

<br>

<a id="Modules"></a>
# Modules
The Modules is a special folder. It allows you to manage your application more easily by dividing it into modules according to business logic.

 Modules have their own files inside;

- Component (CustomButton, CustomLayout etc.)
- Redux (Actions, Reducers, Store etc.)
- Utils (Type etc. )
- API (API request, routes)
- Services 

<br>

![modules+expo](https://user-images.githubusercontent.com/13048645/141460013-9a31548f-0df2-45e8-992e-81592be9f401.jpg)


<br>

In this way, it provides a simpler and easier development process by searching the codes related to the Module only in that folder.
<br>

<a id="Providers"></a>
# Providers
Providers Folder containing base providers and container in the project.
<br>
Sample: ThemeProvider, Localization etc.

<a id="Routers"></a>
# Routers
Everything about routing.

<a id="Screens"></a>
# Screens
The folder where the pages in the application are located. Stack-based grouping simplifies management.
<br>
Sample: ProfileStack { Profile, Post, Settings } etc.

<a id="Utils"></a>
# Utils
Utils Folder containing base utils and container in the project.
<br>
Sample: Routes Type, Network etc.

<a id="Run"></a>
# Run in Dev Environment

- Setting up the development environment: https://reactnative.dev/docs/environment-setup.
- Install dependencies: `expo install` ( `yarn install` or `npm install`).
- Run on both Android & iOS: `expo start` (or `yarn start`).
- Run on Android: `yarn android` (or `npm run android`).
- Run on iOS: `yarn ios` (or `npm run ios`).
- ✨ Don't forget to enable eslint ✨

<a id="Push"></a>
# Code Push

- expo-update documentation link : https://docs.expo.dev/workflow/publishing/
- Run on `expo publish` 

<a id="ExpoGo"></a>
# Run Expo Go

![expo-go](https://user-images.githubusercontent.com/32386753/164703014-1fe16d0d-c5e7-4be0-97fe-5f807e82f5ab.svg)

<br>

<a id="ExpoProjectLink"></a>

# Expo Project Link

```
https://expo.dev/@alikeskin/milvasoft
```
