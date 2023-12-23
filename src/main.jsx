import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Main from './Layout/Main.jsx';
import MyTask from './Pages/MyTask/MyTask.jsx';
import CreateTask from './Pages/Create Task/CreateTask.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/mytask',
        element: <MyTask></MyTask>
      },
      {
        path: '/createtask',
        element: <CreateTask></CreateTask>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto px-5'>
    <React.StrictMode>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </React.StrictMode>
  </div>
)
