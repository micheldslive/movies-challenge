import React from 'react'
import { IMoviesResults } from '@/core/types'
import CardContainer from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star'
import { CardActionArea, Box } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { RevealContent } from './reveal'
import moment from 'moment'
import Placeholder from '@/assets/placeholder.png'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Genre } from './genre'

export const Card = ({ results }: IMoviesResults) => {
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASEURL || ''

  return (
    <>
      {results.map(({ id, poster_path, title, release_date, genre_ids }) => (
        <React.Fragment key={id.toString()}>
          <RevealContent>
            <CardContainer sx={{ maxWidth: 345 }} className='card-content'>
              <CardActionArea>
                <Box component='div' className='card-image'>
                  <LazyLoadImage
                    className='image'
                    effect='blur'
                    src={
                      poster_path ? IMAGE_BASE_URL + poster_path : Placeholder
                    }
                    placeholderSrc={Placeholder}
                    alt={title}
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
                    {}
                    <Genre genre_id={genre_ids[0]} />
                  </Box>
                </Box>
              </CardActionArea>
            </CardContainer>
          </RevealContent>
        </React.Fragment>
      ))}
    </>
  )
}
