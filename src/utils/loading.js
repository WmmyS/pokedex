import { Loading } from "quasar";

export function showLoading() {
  Loading.show({
    message: 'Aguarde',
    boxClass: 'bg-grey text-grey-9',
    spinnerColor: 'yellow',

  })
}

export function hideLoading() {
  Loading.hide()
}
