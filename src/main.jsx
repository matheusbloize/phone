import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error'
import Weather from './routes/Weather/Weather'
import Camera from './routes/Camera/Camera'
import Todo from './routes/Todo/Todo'
import Calculator from './routes/Calculator/Calculator'
import Exchange from './routes/Exchange/Exchange'
import Settings from './routes/Settings/Settings'
import TicTacToe from './routes/TicTacToe/TicTacToe'
import Clock from './routes/Clock/Clock'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/weather",
        element: <Weather />
      },
      {
        path: "/camera",
        element: <Camera />
      },
      {
        path: "/todo",
        element: <Todo />
      },
      {
        path: "/calculator",
        element: <Calculator />
      },
      {
        path: "/exchange",
        element: <Exchange />
      },
      {
        path: "/settings",
        element: <Settings />
      },
      {
        path: "/tictactoe",
        element: <TicTacToe />
      },
      {
        path: "/clock",
        element: <Clock />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
