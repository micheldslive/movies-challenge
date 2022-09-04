import { memo } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useStates } from '@/contexts/states'

const Search = () => {
  const { setSearch } = useStates()

  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Pesquisa'
        aria-label='input'
        onChange={(event) => setSearch(encodeURI(event.currentTarget.value))}
      />
      <SearchIcon aria-label='svg' />
    </div>
  )
}

export default memo(Search)
