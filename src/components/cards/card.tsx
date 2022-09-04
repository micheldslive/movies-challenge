import { IMoviesResults } from '@/core/types'
import CardContainer from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const Card = ({ results }: IMoviesResults) => {
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASEURL || ''

  return (
    <>
      {results.map((movie) => (
        <CardContainer sx={{ maxWidth: 345 }} className='card-content'>
          <CardActionArea>
            <LazyLoadImage
              className='image'
              src={IMAGE_BASE_URL + movie.poster_path}
              effect='blur'
              alt={movie.title}
            />
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
                {movie.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </CardContainer>
      ))}
    </>
  )
}
