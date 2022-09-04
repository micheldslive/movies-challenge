import Logo from '@/components/logo'
import Search from '@/components/search'

const Header = () => {
  return (
    <header className='header-content'>
      <section>
        <Logo />
        <Search />
      </section>
    </header>
  )
}

export default Header
