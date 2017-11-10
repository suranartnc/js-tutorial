import Cat from './modules/catAge'

export default function renderApp() {
  const myCatAge = 3
  const myCatLifeStyle = 'outdoor'
  const myCat = new Cat(myCatAge, myCatLifeStyle)
  const myActualCatAge = myCat.findActualAge()

  return `My cat's age in human years is ${myActualCatAge}`
}
