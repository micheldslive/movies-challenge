import { useEffect } from 'react'
import { useStates } from '@/contexts/states'
import { useMovies } from '@/contexts/movies'
import { Cards } from '@/components/cards'

const Home = () => {
  return (
    <section>
      <Cards />
    </section>
  )
}

export default Home
