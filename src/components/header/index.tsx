import Logo from '@/components/logo'
import Search from '@/components/search'
import Wishlist from '@/components/wishlist'
import Minicart from '@/components/minicart'

const Header = () => {
  return (
    <header className='header-content'>
      <section>
        <Logo />
        <Search />
        <div className='buttons-content'>
          <Wishlist />
          <Minicart />
        </div>
      </section>
    </header>
  )
}

export default Header
