import React, { SetStateAction } from 'react'

export interface IChildren {
  children: React.ReactNode
}

// STATES CONTEXT
export interface IStateContext {
  search: string
  wishlistOpen: boolean
  cartOpen: boolean
  genres: IGenres[]
}

export interface IStateDefaultValues extends IStateContext {
  setSearch(search: string): void
  setWishlistOpen(wishlistOpen: boolean): void
  setCartOpen(carttOpen: boolean): void
}

export type TActionStateContext =
  | { type: 'search'; search: string }
  | { type: 'wishlistOpen'; wishlistOpen: boolean }
  | { type: 'cartOpen'; cartOpen: boolean }
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

// CART CONTEXT
export interface ICartContext {
  cart: IMovieCart[]
}

export interface ICartDefaultValues extends ICartContext {
  add(add: IMovieCart): void
  remove(id: number): void
  removeAll(): void
  increment(id: number): void
  decrement(id: number): void
  totalQuantityAndPrice(): ICartTotalQtdAndPrice
}

export interface ICartTotalQtdAndPrice {
  quantity: number
  total: number
}

export type TActionCartContext =
  | { type: 'add'; add: IMovieCart }
  | { type: 'addStorage'; addStorage: IMovieCart[] }
  | { type: 'remove'; remove: IMovieCart[] }
  | { type: 'removeAll'; remove: IMovieCart[] }
  | { type: 'increment'; increment: IMovieCart[] }
  | { type: 'decrement'; decrement: IMovieCart[] }

export interface IMovieCart {
  id: number
  title: string
  quantity: number
  price: number
  poster_path: string
}

// WISHLIST CONTEXT
export interface IWishlistContext {
  wishlist: IMovieCart[]
}

export interface IWishlistDefaultValues extends IWishlistContext {
  add(add: IMovieCart): void
  remove(id: number): void
}

export type TActionWishlistContext =
  | { type: 'add'; add: IMovieCart }
  | { type: 'addStorage'; addStorage: IMovieCart[] }
  | { type: 'remove'; remove: IMovieCart[] }

// CHECKOUT CONTEXT
// export interface ICheckoutContext {
//   checkout: ICheckoutRegister
// }
export interface ICheckoutContext {
  name: string
  cpf: string
  phone: string
  email: string
  cep: string
  address: string
  city: string
  state: string
}

export interface ICheckoutDefaultValues extends ICheckoutContext {
  setState: React.Dispatch<SetStateAction<ICheckoutContext>>
}

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
