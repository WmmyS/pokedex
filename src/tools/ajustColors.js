export function ajustColors (data) {
  switch (data) {
    case 'yellow':
      return 'linear-gradient(180deg, #F5DB13, #F2B807)'

    case 'blue':
      return 'linear-gradient(180deg, #5BC7FA,#35BAFF)'

    case 'red':
      return 'linear-gradient(90deg, #92281f, #D93E30)'

    case 'brown':
      return 'linear-gradient(90deg, #92281f, #D93E30)'

    case 'green':
      return 'linear-gradient(90deg, #64D368,#64D368)'

    case 'white':
      return 'linear-gradient(180deg, #FFFFFF, #F5F5F5)'

    case 'pink':
      return 'linear-gradient(90deg, #F89EAE ,#F4B5C1)'

    case 'purple':
      return 'linear-gradient(180deg, #b57bf8 ,#8f39e0)'

    default:
      return 'linear-gradient(90deg, #FFFFFF, #F5F5F5)'
  }
}
