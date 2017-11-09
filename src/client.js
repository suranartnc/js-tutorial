import { outputToScreen } from './utils/output'
import { findCatAge } from './modules/catAge'

const myCatAge = 3
const myCatLifeStyle = 'outdoor'

const myActualCatAge = findCatAge(myCatAge, myCatLifeStyle)
outputToScreen(`My cat's age in human years is ${myActualCatAge}`)
