# REM React Challenge

## Project Description

This project is a skip hire booking interface built with React and TypeScript. It allows users to select skip sizes, view details, and proceed through a step-based booking process. The UI is responsive and leverages modern React patterns and Tailwind CSS for styling.



## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm (v9 or newer recommended)

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Build for production

```bash
npm run build
```

The production-ready files will be in the `build` directory.

---

For any issues, please check your Node.js and npm versions or delete `node_modules` and run `npm install` again.

## Approach

- **Component-based architecture:** The UI is split into reusable components for skip selection, preview, and step actions.
- **API integration:** Data is fetched from a provided link for available skips by location.
- **Responsive design:** Both mobile and desktop layouts are handled with adaptive components.
- **User experience:** Placeholder and loading states are provided for a smooth experience, and accessibility is considered in interactive elements and by replacing the grid with a item selector, the number of click/scrolls required has been reduced to submit to next step, I've added sense of size on the UI for quick visual reference.
- **Separation of concerns:** Logic for fetching data, displaying options, and handling actions is encapsulated in dedicated components and services.
- **If not broken don't fix it:** I reused some of original elements and since this step-based reservation process, I made sure to keep the implimentation UI / UX inline with the rest of the flow only droping the grid in favor of a simple selector (assuming skips are defined by their sizes)
- **Minimal footprint** since this one and data fairly easy to handle , I used simple state managements with only useState() this could be enhanced to use dedicated state management libraries such Redux or Zustand

## Where to go next

- If I were to continue on this , I would make SkipSizeOption more condense on mobile and desktop , or to enhance it further to a more visual design like using skip shapes as options containers 
- Use a state management library like Redux , Zustand
- Refactor components hardcoded values (on structure and css)
- Skip previewer could use a description in the bottom of right section , giving the user practical informations on usage and requirementss before ordering

