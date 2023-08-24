import React, { useState } from 'react'
import { PopupProvider } from '../context/PopupProvider'
import { LogInProvider } from '../context/LogInContext'
import Popup from './Popup/Popup'
import Loader from './UI-kit/Loader/Loader'
import Main from './Main/Main'
import { Route, Routes } from 'react-router'
import Movies from './Movies/Movies'
import SavedMovies from './SavedMovies/SavedMovies'
import NotFound from './NotFound/NotFound'
import Login from './Login/Login'
import Register from './Register/Register'
import Profile from './Profile/Profile'

export default function App() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <PopupProvider>
      <LogInProvider>
        <Popup />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="App">
            <Routes>
              <Route path={"/"} element={<Main />} />
              <Route path={"/movies"} element={<Movies />} />
              <Route path={"/saved-movies"} element={<SavedMovies />} />
              <Route path={"/sign-up"} element={<Register />} />
              <Route path={"/sign-in"} element={<Login />} />
              <Route path={"/profile"} element={<Profile />} />
              <Route path={"*"} element={<NotFound />} />
            </Routes>
          </div>
        )}
      </LogInProvider>
    </PopupProvider>
    // <Main />
    // <Movies />
    // <SavedMovies />
    // <NotFound />
    // <Login />
    // <Register />
    // <Profile />
  )
}
