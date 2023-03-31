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
import Memory from './routes/Memory/Memory'
import Settings from './routes/Settings/Settings'
import TicTacToe from './routes/TicTacToe/TicTacToe'
import Streaming from './routes/Streaming/Streaming'
import { ModeProvider } from './context/ModeContext'
import { BackgroundImageProvider } from './context/BackgroundImageContext'

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
        path: "/memory",
        element: <Memory />
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
        path: "/streaming",
        element: <Streaming />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModeProvider>
    <BackgroundImageProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </BackgroundImageProvider>
  </ModeProvider>
)
