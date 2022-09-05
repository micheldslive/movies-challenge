import { useStates } from '@/contexts'

interface IGenreProps {
  genre_id: number
}

export const Genre = ({ genre_id }: IGenreProps) => {
  const { genres } = useStates()
  const genre = genres.find(({ id }) => id === genre_id)

  return <span className='card-genre'>{genre?.name}</span>
}
