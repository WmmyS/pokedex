export const exceptions = (error) => {
  try {
    switch (error.response.status) {
      case 400:
        return 'Bad request'
      case 401:
        return 'Não autorizado'
      case 403:
        return 'Não autorizado'
      case 404:
        if (error.response.data.message === undefined) {
          return 'Rota inexistente'
        }
        return error.response.data.message
      case 500:
        return 'Erro interno no servidor'
      default:
        return 'Oops algo deu errado'
    }
  } catch (err) { }
  return error.message
}
