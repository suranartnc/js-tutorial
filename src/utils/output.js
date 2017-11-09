export function outputToScreen(content, node = 'root') {
  document.getElementById(node).innerHTML = content
}
