export default class Cat {
  constructor(age, lifeStyle) {
    this.age = age
    this.lifeStyle = lifeStyle
  }

  getMultiplier() {
    return {
      indoor: 4,
      outdoor: 8
    }[this.lifeStyle]
  }

  findActualAge() {
    let actualCatAge = 0

    if (this.age === 1) return 15

    if (this.age >= 2) {
      const multiplier = this.getMultiplier()
      const extra = (this.age - 2) * multiplier
      actualCatAge = 24 + extra
    }

    return actualCatAge
  }
}
