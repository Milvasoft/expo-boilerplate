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
	- [Localization](#Localization)
	- [Modules](#Modules)
	- [Network](#Network)
	- [Providers](#Providers)
	- [Routers](#Routers)
	- [Store](#Store)
	- [Styles](#Styles)
	- [Utils](#Utils)
- [Run in Dev Environment](#Run)
- [Code Push](#Push)
- [Run Expo Go](#ExpoGo)
- [Expo Project Link](#ExpoProjectLink)

<br>

<a id="Boilerplate-Features"></a>
## Boilerplate Features:

* Routing
* Redux Toolkit
* Test
* Network
* Axios
* Theme
* Local Storage
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
     ├── enums
     ├── images
     └── languages
 ├── helpers,  
     ├── global
     ├── localization
     ├── router
     ├── storage
     └── toast
 ├── components
     ├── ErrorComponent
        ├── ErrorComponent.test
        ├── index
	├── style
        └── type	
     ├── GeneralActivityIndicator
     ├── NotFoundComponent
     └── ToastMessage
 ├── hooks
     ├── useTheme
     └── useThemedStyles
 ├── localization
     ├── en
     └── tr
 ├── modules
     └── app
         ├── api
         ├── components
         ├── redux
         ├── screens
         ├── services
         ├── types
         └── utils
     └── profile
         ├── api
         ├── components
         ├── redux
         ├── screens
         ├── services
         ├── types
         └── utils
 ├── network
     ├── axiosInstance
     └── baseQuery	 
 ├── providers 
     ├── AppLoadingProvider
     ├── ErrorBoundary
     ├── Localization
     ├── NetworkInfoContainer
     ├── Notification
     ├── ThemeListener
     ├── ThemeProvider
     └── Toast
 ├── routers
     ├── BottomNavigation
     └── ProfileStack
 ├── store
     ├── rootReducer
     └── store
 ├── styles
     ├── fonts
     ├── padding
     ├── theme
     ├── toast
     └── typography
 └── utils
     ├── Routes
     └── ScreenOptions
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
Sample: ErrorComponent, ToastMessage etc.

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

<a id="Localization"></a>
# Localization
Localization Settings.
<br>
Sample: tr, en etc.

<br>

<a id="Modules"></a>
# Modules
The Modules is a special folder. It allows you to manage your application more easily by dividing it into modules according to business logic.

 Modules have their own files inside;

- Component (CustomButton, CustomLayout etc.)
- Screens (HomeScreen, ProfileScreen etc.)
- Redux (AppSlice, Store etc.)
- Utils (Helper Function etc. )
- API (API request, routes)
- Services 

<br>

![abk-expo-boilerplate-modules](https://github.com/Milvasoft/milva-admin-generator/assets/32386753/b9cfff14-48d5-4e52-92af-a4d37700f2bd)


<br>

In this way, it provides a simpler and easier development process by searching the codes related to the Module only in that folder.
<br>

<a id="network"></a>
# Network
Network Folder containing base RTK and axiosInstance in the project.

<a id="Providers"></a>
# Providers
Providers Folder containing base providers and container in the project.
<br>
Sample: ThemeProvider, Localization etc.

<a id="Routers"></a>
# Routers
Everything about routing.


<a id="Store"></a>
# Screens
Store Settings
<br>

<a id="Styles"></a>
# Styles
Base Style Settings
<br>
Sample: fonts, padding etc.

<a id="Utils"></a>
# Utils
Utils Folder containing base utils and container in the project.
<br>
Sample: Routes Type, ScreenOptions etc.

<a id="Run"></a>
# Run in Dev Environment

- Setting up the development environment: https://reactnative.dev/docs/environment-setup.
- Install dependencies: `npx expo install` ( `yarn install` or `npm install`).
- Run on both Android & iOS: `npx expo start` (or `yarn start`).
- Run on Android: `yarn android` (or `npm run android`).
- Run on iOS: `yarn ios` (or `npm run ios`).
- Run on Test: `yarn test` (or `npm run test`).
- ✨ Don't forget to enable eslint ✨

<a id="Push"></a>
# Code Push

- expo-update documentation link : https://docs.expo.dev/workflow/publishing/
- Run on `eas update` 
- ✨ Don't forget to local expo-cli and node version check ✨

<a id="ExpoGo"></a>
# Run Expo Go

![eas-update](https://github.com/Milvasoft/expo-boilerplate/assets/32386753/067203f8-ea57-4b91-a698-884938111152)

<br>

<a id="ExpoProjectLink"></a>

# Expo Project Link

```
https://expo.dev/%40aliburhankeskin/milvasoft-expo-boilerplate?serviceType=eas&distribution=expo-go&scheme=&channel=master&sdkVersion=50.0.0
```
