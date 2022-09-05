import React from 'react'
import { IMoviesResults } from '@/core/types'
import CardContainer from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star'
import { CardActionArea, Box } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { RevealContent } from './reveal'
import moment from 'moment'
import { Genre } from './genre'
import Price from '@/components/price'
import { AddButton } from '@/components/add'
import { ImagePath } from '@/core/utils/imagePath'
import { getPrice } from '@/core/utils/price'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { AddFavorite } from '../add-wishlist'

export const Card = ({ results }: IMoviesResults) => {
  return (
    <>
      {results.map(
        ({ id, poster_path, title, release_date, genre_ids, vote_average }) => (
          <React.Fragment key={id.toString()}>
            <RevealContent>
              <CardContainer sx={{ maxWidth: 345 }} className='card-content'>
                <CardActionArea component='a'>
                  <Box component='div' className='card-image'>
                    <LazyLoadImage
                      className='image'
                      effect='blur'
                      src={ImagePath(poster_path)}
                      alt={title}
                    />
                    <AddFavorite
                      item={{
                        id,
                        title,
                        quantity: 1,
                        poster_path,
                        price: getPrice(vote_average),
                      }}
                    />
                    <Box className='card-date' component='span'>
                      {moment(release_date).format('D [de]')}
                      <Box component='span' textTransform='capitalize'>
                        &nbsp;
                        {new Date(release_date).toLocaleString('pt-BR', {
                          month: 'long',
                        })}
                      </Box>
                      {moment(release_date).format(', YYYY')}
                    </Box>
                  </Box>
                  <Box
                    component='div'
                    display='flex'
                    alignItems='center'
                    flexDirection='column'
                  >
                    <Typography gutterBottom variant='h6' component='h6'>
                      {title}
                    </Typography>
                    <Box component='span' display='flex' alignItems='center'>
                      <StarIcon />
                      <Genre genre_id={genre_ids[0]} />
                    </Box>
                    <Box component='span' display='flex' alignItems='center'>
                      <Price rating={vote_average} />
                    </Box>
                    <AddButton
                      item={{
                        id,
                        title,
                        quantity: 1,
                        poster_path,
                        price: getPrice(vote_average),
                      }}
                    />
                  </Box>
                </CardActionArea>
              </CardContainer>
            </RevealContent>
          </React.Fragment>
        ),
      )}
    </>
  )
}
