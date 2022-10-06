export function traduzirTypes(data) {
  switch (data) {
    case 'normal':
      return 'Normal'
    case 'fighting':
      return 'Lutador'
    case 'flying':
      return 'Voador'
    case 'poison':
      return 'Veneno'
    case 'ground':
      return 'Terrestre'
    case 'rock':
      return 'Pedra'
    case 'bug':
      return 'Inseto'
    case 'ghost':
      return 'Fantasma'
    case 'steel':
      return 'Metal'
    case 'fire':
      return 'Fogo'
    case 'water':
      return 'Água'
    case 'grass':
      return 'Grama'
    case 'electric':
      return 'Elétrico'
    case 'psychic':
      return 'Físico'
    case 'ice':
      return 'Gelo'
    case 'dragon':
      return 'Dragão'
    case 'dark':
      return 'Trevas'
    case 'fairy':
      return 'Fada'
    case 'unknown':
      return 'Desconhecido'
    case 'shadow':
      return 'Sombrio'
    default:
      return 'Desconhecido'
  }
}
