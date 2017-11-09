import { findCatAge } from './modules/catAge'

export default function renderApp() {
  const myCatAge = 3
  const myCatLifeStyle = 'outdoor'
  const myActualCatAge = findCatAge(myCatAge, myCatLifeStyle)

  return `My cat's age in human years is ${myActualCatAge}`
}
