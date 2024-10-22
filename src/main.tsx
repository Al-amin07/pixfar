
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store.ts';
import Home from './pages/Home.tsx';
import Cart from './pages/Cart.tsx';
import { Toaster } from 'react-hot-toast';
import ProductDetails from './pages/ProductDetails.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/products/:id',
        element: <ProductDetails />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <RouterProvider router={router} />
      <Toaster />
    </PersistGate>
  </Provider>
  ,
)
