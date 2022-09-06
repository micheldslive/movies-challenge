import { memo } from 'react'
import { ToastContainer } from 'react-toastify'

const Toast = () => {
  return (
    <ToastContainer
      aria-label='toast'
      position='top-left'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}

export default memo(Toast)
