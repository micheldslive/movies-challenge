import { createContext, useContext } from 'react'

const MoviesContext = createContext({})

export const useMovies = useContext(MoviesContext)
