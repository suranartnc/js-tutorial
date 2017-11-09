export function findCatAge(catAge, catLifeStyle) {
  let actualCatAge = 0

  if (catAge === 1) return 15

  if (catAge >= 2) {
    const multiplier = getMultiplier(catLifeStyle)
    const extra = (catAge - 2) * multiplier
    actualCatAge = 24 + extra
  }

  return actualCatAge
}

function getMultiplier(catLifeStyle) {
  return {
    indoor: 4,
    outdoor: 8
  }[catLifeStyle]
}
