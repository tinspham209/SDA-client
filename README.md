# Mini Project: Smart Dashboard Application - Client

## Date: 20 - Aug - 2020

### Functions:

- Environment Analysis System

### Releases

- https://sda-research.ml

### Screenshot

### Plan Of Action

1. Initial Project
2. Setup React & Install dependencies
3. Setup Router
4. Navbar component
5. InfoSection component
6. Add data to homepage
7. Create Navbar Dashboard
8. Implement Redux to app
9. Update Navbar
10. Import Material-UI
11. Install redux-toolkit

### Next Steps:

- Create Grid UI
- Create List of item in sidebar

### Directory Structure

```

.
├── package.json
├── package-lock.json
├── README.md
├── deploy-firebase
├── firebase.json
├── .gitignore
└── src
    ├── app
        ├── store.js
    ├── assets
        └── img
    ├── components
        ├── Dashboard
            ├── Navbar
        ├── Footer
        ├── InfoSection
        ├── Navbar
        ├── UI
        ├── index.js
        └── ScrollToTop.jsx
    ├── pages
        ├── About
            ├── About.js
            ├── aboutSlice.js
            └── Data.js
        ├── Contact
            ├── Contact.js
            ├── contactSlice.js
            └── Data.js
        ├── Dashboard
            ├── Dashboard.js
            ├── dashboardSlice.js
            └── Data.js
        └── HomePage
            ├── Homepage.js
            ├── homepageSlice.js
            └── Data.js
    ├── App.js
    ├── GlobalStyles.js
    └── index.js
```

For the project to build, these must exist with exact filenames:

- `public/index.html` is the page template
- `src/index.js` is the entry point
- `src/GlobalStyles.js` is the Global Styles
- `src/App.js` is the Router

## Installation Guide

### Tech-Stack

- React Hooks
- react-router-dom
- immutability-helper
- react-dnd
- react-dnd-html5-backend
- react-redux
- @reduxjs/toolkit
- @material-ui/core
- styled-components
- react-icons

### Production

- Clone this project

```
git clone https://github.com/tinspham209/SDA-client
```

- Install dependencies

```
npm install
```

- Start the server

```
npm start
```

### Development

- Clone this project
- Install dependencies

```
npm install
```

- Start packager

```
npm start
```

### Folder function:

- `app`: store redux
- `assets`: store image
- `components`:
- `pages`:

### Component function:

### How to name a folder and a file

- Folder name: - Ex: `InfoSection`
- Component file name: should be -- Ex: `InfoSection.jsx`
- Style component file name: should be -- Ex: `InfoSection.elements.js`

### How to import and export module?

- Import:

```js
//import every thing
import * as React from "react";
import * as ReactDOM from "react-dom";

//for default export
import InfoSection from "./InfoSection";

//for named export
import { InfoSec, InfoRow } from "./InfoSection.elements";
```

### How to style for each component?

- Create a styled-component file. Ex: `InfoSection.elements.js`
- Import to `jsx` file

```js
// InfoSection.jsx

import { InfoSec, InfoRow } from "./InfoSection.elements";
```

### How to deploy to firebase

i'll write it as soon as i can 😀
