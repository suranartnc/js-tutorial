require('es6-promise').polyfill()
require('isomorphic-fetch')

export default function renderApp() {
  const api = 'https://api.github.com/users/suranartnc/repos'
  return api
}
