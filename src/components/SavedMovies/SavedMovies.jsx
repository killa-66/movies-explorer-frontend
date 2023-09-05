import React from 'react'
import SearchInput from '../SearchInput/SearchInput'
import Navigation from '../Navigation/Navigation'
import Popup from '../Popup/Popup'
import MoviesGrid from '../Movies/MoviesGrid/MoviesGrid'
import { data } from '../../utils/constants/testData'
import DeleteButton from '../UI-kit/DeleteButton'
import LoadMore from '../LoadMore/LoadMore'
import Footer from '../Footer/Footer'

export default function SavedMovies() {
  return (
    <>
      <Popup />
      <Navigation />
      <>
        <SearchInput />
        <MoviesGrid data={data.filmArraySaved}
          element={DeleteButton} />
        <LoadMore isMore={false} />
      </>
      <Footer />
    </>

  )
}
