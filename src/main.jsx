import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Errorpage from './Pages/ErrorPage/Errorpage';
import AllRecipes from './Pages/AllRecipes/AllRecipes';
import AddRecipe from './Pages/AddRecipe/AddRecipe';
import AuthProvider from './Providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RecipeDetails from './Pages/AllRecipes/RecipeDetails';
import { Toaster } from 'react-hot-toast';
import PurchaseCoin from './Pages/purchaseCoin/PurchaseCoin';
import Payment from './Pages/purchaseCoin/Payment';



const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/recipes",
        element: <AllRecipes/>
      },
      {
        path: "/add-Recipes",
        element: <AddRecipe/>
      },
      {
        path: "/recipe-details/:id",
        element: <RecipeDetails/>
      },
      {
        path: "/coin",
        element: <PurchaseCoin/>
      },
      {
        path: "/payment",
        element: <Payment/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}> 
    <RouterProvider router={router} />
    <Toaster />
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
