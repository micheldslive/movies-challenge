import { useStates } from '@/contexts'
import { Drawer } from '@mui/material'
import MinicartContent from './minicart'

export const Minicart = () => {
  const { setCartOpen, cartOpen } = useStates()

  return (
    <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
      <MinicartContent />
    </Drawer>
  )
}
