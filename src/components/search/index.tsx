import { memo } from 'react'
import { GrSearch } from 'react-icons/gr'

const Search = () => {
  return (
    <div className='search'>
      <input type='text' placeholder='Pesquisa' aria-label='input' />
      <GrSearch size={22} aria-label='svg' />
    </div>
  )
}

export default memo(Search)
