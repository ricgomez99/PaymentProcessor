import { Slide, toast } from 'react-toastify'

export default function ToastSuccess(message: string) {
  return toast.success(<span>{message}</span>, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    transition: Slide,
  })
}
