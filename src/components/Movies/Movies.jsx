import React from 'react'
import Navigation from '../Navigation/Navigation'
import MoviesGrid from './MoviesGrid/MoviesGrid'
import { data } from '../../utils/constants/testData'
import IsOwned from '../UI-kit/IsOwned'
import LoadMore from '../LoadMore/LoadMore'
import Footer from '../Footer/Footer'
import SearchInput from '../SearchInput/SearchInput'

export default function Movies() {
  return (
    <>
      <Navigation />
      <main>
        <SearchInput />
        <MoviesGrid data={data.filmArray} element={IsOwned} />
        <LoadMore isMore={true} />
      </main>
      <Footer />
    </>
  )
}
