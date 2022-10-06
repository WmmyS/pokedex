export function ajustTypeColor(data) {
  switch (data) {
    case 'normal':
      return 'EDEDED'
    case 'fighting':
      return 'D3425F'
    case 'flying':
      return 'A1BBEC'
    case 'poison':
      return 'B763CF'
    case 'ground':
      return 'DA7C4D'
    case 'rock':
      return 'C9BB8A'
    case 'bug':
      return 'A8B822'
    case 'ghost':
      return '705898'
    case 'steel':
      return '5695A3'
    case 'fire':
      return 'F03030'
    case 'water':
      return '6890F0'
    case 'grass':
      return '78C850'
    case 'electric':
      return 'F8D030'
    case 'psychic':
      return 'CAA296'
    case 'ice':
      return '98D8D8'
    case 'dragon':
      return '7038F8'
    case 'dark':
      return '49433F'
    case 'fairy':
      return 'EE99AC'
    case 'unknown':
      return '68A090'
    case 'shadow':
      return '000000'
    default:
      return 'FFFFFF'
  }
}
