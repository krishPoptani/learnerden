// utils/alerts.ts
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export function showAlertPopupSuccess(
  title: string = 'Success',
  text?: string,
  timer: number = 2500,
  showConfirmButton: boolean = false
): void {
  MySwal.fire({
    title,
    text,
    icon: 'success',
    timer,
    showConfirmButton,
    customClass: {
      popup: 'rounded-xl shadow-lg p-4 bg-white text-gray-800',
      title: 'text-xl font-semibold',
      htmlContainer: 'text-sm text-gray-600', // updated for newer sweetalert2 versions
    },
    background: 'white',
  })
}

export function showAlertPopupError(
  title: string = 'Error',
  text?: string,
  showConfirmButton: boolean = true
): void {
  MySwal.fire({
    title,
    text,
    icon: 'error',
    showConfirmButton,
    customClass: {
      popup: 'rounded-xl shadow-lg p-4 bg-white text-red-800',
      title: 'text-xl font-semibold',
      htmlContainer: 'text-sm text-gray-600',
    },
    background: 'white',
  })
}

export function showAlertPopupInfo(
  title: string = 'Info',
  text?: string,
  timer: number = 2500,
  showConfirmButton: boolean = false
): void {
  MySwal.fire({
    title,
    text,
    icon: 'info',
    timer,
    showConfirmButton,
    customClass: {
      popup: 'rounded-xl shadow-lg p-4 bg-white text-blue-800',
      title: 'text-xl font-semibold',
      htmlContainer: 'text-sm text-gray-600',
    },
    background: 'white',
  })
}
