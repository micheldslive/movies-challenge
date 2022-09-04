export interface IChildren {
  children: React.ReactNode
}

// STATES CONTEXT
export interface IStateContext {
  search: string
  genres: IGenres[]
}

export interface IStateDefaultValues extends IStateContext {
  setSearch(search: string): void
}

export type TActionStateContext =
  | { type: 'search'; search: string }
  | { type: 'genres'; genres: IGenres[] }

// MOVIES CONTEXT
export interface IMoviesContext {
  loading: boolean
}

export interface IMoviesDefaultValues extends IMoviesContext {
  setLoading(loading: boolean): void
  getMovies(page: number): Promise<IMoviesReturn>
  searchByQuery(page: number, search: string): Promise<IMoviesReturn>
}

export type TMoviesActionContext = { type: 'loading'; loading: boolean }

// MOVIES DATA TYPES

export interface IMoviesResults {
  results: IMoviesResult[]
}
export interface IMoviesReturn extends IMoviesResults {
  page: number
  total_pages: number
  total_results: number
}

export interface IMoviesResult {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IGenres {
  id: number
  name: string
}
