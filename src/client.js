import { renderToDOM } from './utils/output'
import renderApp from './app'

const content = renderApp()
renderToDOM(content)
