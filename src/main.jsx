import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Main from './layout/Main.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Error from './pages/Error/Error.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import RecipeDetails from './pages/RecipeDetails/RecipeDetails.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';

const router = createBrowserRouter([
     {
      path: '*',
      element: <Error></Error>
     },
   
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'recipe/:id',
        element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-10-server-keyamoni05866.vercel.app/chefs/${params.id}`)
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
     {
      path: 'login',
      element: <Login></Login>
     },
     {
      path: 'register',
      element: <Register></Register>
     }
  
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
