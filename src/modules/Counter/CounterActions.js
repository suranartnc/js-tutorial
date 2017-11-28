export function updateCount(type = 'INCREASE', number = 1) {
  return {
    type,
    number,
    error: {
      status: 400,
      message: 'Not Found'
    }
  }
}
