import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useStates, useMovies } from '@/contexts'
import { Card } from './card'
import CircularProgress from '@mui/material/CircularProgress'

export const Cards = () => {
  const { search } = useStates()
  const { getMovies, searchByQuery } = useMovies()

  const { ref, inView } = useInView()

  const { status, data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['results', search],
      async ({ pageParam = 0 }) => {
        const data = search
          ? await searchByQuery(pageParam + 1, search)
          : await getMovies(pageParam + 1)
        return data
      },
      {
        getNextPageParam: ({ page }) => page ?? page + 1,
      },
    )

  useEffect(() => {
    inView && fetchNextPage()
  }, [inView])

  return (
    <div className='cards-container'>
      {status === 'loading' ? (
        <div className='preloading'>
          <CircularProgress className='progress' />
        </div>
      ) : status === 'error' ? (
        <span>Error: Dados não foram carregados</span>
      ) : (
        <>
          <div className='cards-content'>
            {data.pages.map((page) => (
              <React.Fragment key={page.page}>
                <Card results={page.results} />
              </React.Fragment>
            ))}
          </div>

          <div>
            <a ref={ref} onClick={() => fetchNextPage()}>
              {isFetchingNextPage && (
                <div className='preloading'>
                  <CircularProgress className='progress' />
                </div>
              )}
            </a>
          </div>
        </>
      )}
    </div>
  )
}
