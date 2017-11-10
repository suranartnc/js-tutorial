require('es6-promise').polyfill()
require('isomorphic-fetch')

export default function renderApp() {
  const api = 'http://myaday.net/pop/api.php'

  return fetch(api)
    .then(res => res.json())
    .then(({ data }) => {
      return data
        .map(category => category.cat_name)
        .toString()
        .replace(/,/g, '<br />')
    })
}
