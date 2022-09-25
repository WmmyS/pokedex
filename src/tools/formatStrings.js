export function formatName (name) {
  name = name[0].toUpperCase() + name.substring(1);
  return name
}

export function formatRomanNumbers (number) {
  const n = number.split('-')[1].replace(' ', '').toUpperCase()
  const str = number.split('-')[0].replace(' ', '')
  const result = formatName(str) + ' - ' + n
  return result
}
