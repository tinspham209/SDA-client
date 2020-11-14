# Mini Project: Smart Dashboard Application - Client

## Date: 20 - Aug - 2020 to present

### Functions:

- Scientific research: Environment Analysis System in Vietnam

### Releases

- https://sda-research.ml

### Screenshot

<img src="./screenshot.png" alt="screenshot1"/>
<img src="./screenshot2.png" alt="screenshot2"/>

### Plan Of Action

1. Initial Project
2. Setup React & Install dependencies
3. Setup Router
4. Navbar component
5. InfoSection component
6. Add data to homepage
7. Create Navbar Dashboard
8. Implement Redux toolkit to app
9. Update Navbar Dashboard
10. Import Material-UI
11. Grid layout for Dashboard
12. Toolbar component
13. Initial content component
14. Setup draw diagrams
15. Refactor Toolbar component with Redux
16. addNewNode & removeNode
17. First layout of Node
18. Viz Node in TreeView
19. Set unique HeaderName of Node
20. Viz AVG_HUMIDITY in TreeView
21. Viz INDUSTRY in TreeView

### Next Steps:

- handleBtnOnClickInNode doesn't send state to Store;
- Fix item can't drag in Toolbar
- Viz Node in Maps

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
            ├── Toolbar
            ├── Content
            ├── CustomNode
            ├── TableTree
            ├── Dashboard.jsx
            └── index.js
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

### Folder function

- `app`: store redux
- `assets`: store image
- `components`:
- `pages`:

### Component function

- i'll write it as soon as i can 😀

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

### How to setup Redux-Toolkit

i'll write it as soon as i can 😀

### How to update state in Redux of each component

i'll write it as soon as i can 😀
