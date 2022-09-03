import { memo } from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={'/'} className='logo'>
      Logo
    </Link>
  )
}

export default memo(Logo)
