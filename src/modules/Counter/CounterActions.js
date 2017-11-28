export function updateCount(type = 'INCREASE', number = 1) {
  return {
    type,
    number
  }
}
