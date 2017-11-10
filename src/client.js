import { renderToDOM } from './utils/output'
import renderApp from './app'

renderApp().then(content => {
  renderToDOM(content)
})
