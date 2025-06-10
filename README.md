# REM React Challenge

## Project Description

This project is a skip hire booking interface built with React and TypeScript. It allows users to select skip sizes, view details, and proceed through a step-based booking process. The UI is responsive and leverages modern React patterns and Tailwind CSS for styling.



## Getting Started

### Clone the repository

```bash
git clone https://github.com/anasidrissi2/rem-react-challenge.git
cd rem-react-challenge
```

### Prerequisites

- Node.js (v18 or newer recommended)
- npm (v9 or newer recommended) or Yarn (v1.22+)

### Install dependencies

With npm:

```bash
npm install
```

Or with Yarn:

```bash
yarn install
```

### Start the development server

With npm:

```bash
npm start
```

Or with Yarn:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Build for production

With npm:

```bash
npm run build
```

Or with Yarn:

```bash
yarn build
```

The production-ready files will be in the `build` directory.

---

For any issues, please check your Node.js and npm/Yarn versions or delete `node_modules` and run the install command again.

## Approach

- **Component-based architecture:** The UI is split into reusable components for skip selection, preview, and step actions.
- **API integration:** Data is fetched from a provided link for available skips by location.
- **Responsive design:** Both mobile and desktop layouts are handled with adaptive components.
- **User experience:** Placeholder and loading states are provided for a smooth experience, and accessibility is considered in interactive elements. By replacing the grid with an item selector, the number of clicks/scrolls required to proceed to the next step is reduced. A visual sense of size is provided for quick reference.
- **Separation of concerns:** Logic for fetching data, displaying options, and handling actions is encapsulated in dedicated components and services.
- **If it isn't broken, don't fix it:** Some original elements were reused. Since this is a step-based reservation process, the UI/UX was kept consistent with the rest of the flow, only dropping the grid in favor of a simple selector (assuming skips are defined by their sizes).
- **Minimal footprint:** Since the data is fairly easy to handle, simple state management with useState() was used. This could be enhanced with a dedicated state management library such as Redux or Zustand.

## Where to go next

- If I were to continue, I would make SkipSizeOption more condensed on mobile and desktop, or enhance it further to a more visual design, such as using skip shapes as option containers.
- Use a state management library like Redux or Zustand.
- Refactor components to remove hardcoded values (in structure and CSS).
- SkipPreviewer could include a description at the bottom of the right section, giving the user practical information on usage and requirements before ordering

