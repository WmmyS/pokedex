import { Notify } from 'quasar'

export const errorMessage = (message) => {
  const { messageInfo, color, icon } = message

  Notify.create({
    message: messageInfo,
    color,
    icon
  })
}
