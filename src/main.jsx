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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
