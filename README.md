# E-Commerce Product List Application

## Project Overview

This project is a **Simple E-Commerce Product List Application** built with **React**, **TypeScript**, and **RTK Query**. It allows users to browse products, search for items, and manage their shopping cart.
live link : https://pixfar.netlify.app/
Key functionalities include:

- **Infinite Scroll** for loading more products as users scroll down.
- **Search Functionality** for filtering products.
- **Cart Management** using Redux Persist and TypeScript types (`CartItem` and `Product`).
  
The app is deployed on Netlify and demonstrates essential e-commerce features for online product listing.

## Tech Stack

- **React**
- **TypeScript**
- **Redux Toolkit (RTK Query)**
- **Tailwind CSS** (for styling)
  
## Running the App Locally

Follow these steps to get the app running on your local machine:

### Prerequisites

- Node.js (v14 or later)
- npm (or yarn)

### Installation

1. **Clone the repository**:
   git clone https://github.com/your-username/ecommerce-app.git
   cd ecommerce-app
2. **Install dependencies**:
  npm install
3. **Start the development server**:
  npm run dev


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
