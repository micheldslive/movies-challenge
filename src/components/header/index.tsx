import Logo from '@/components/logo'
import Search from '@/components/search'
import WishlistIcon from '@/components/wishlistIcon'
import MinicartIcon from '@/components/minicartIcon'
import { Minicart } from '@/components/minicart'

const Header = () => {
  return (
    <header className='header-content'>
      <section>
        <Logo />
        <Search />
        <div className='buttons-content'>
          <WishlistIcon />
          <MinicartIcon />
        </div>
      </section>
      <Minicart />
    </header>
  )
}

export default Header
