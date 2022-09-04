import { memo } from 'react'
import SearchIcon from '@mui/icons-material/Search'

const Search = () => {
  return (
    <div className='search'>
      <input type='text' placeholder='Pesquisa' aria-label='input' />
      <SearchIcon aria-label='svg' />
    </div>
  )
}

export default memo(Search)
