import { ToastContainer } from 'react-toastify'

export const Toast = () => {
  return (
    <ToastContainer
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
