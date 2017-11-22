export const globalStyles = `
  input {
    padding: 5px;
    margin: 10px;
  }
  button {
    padding: 5px 10px;
    background: none;
    border-radius: 3px;
  }
`

export default {
  app: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
  },
  wrapper: {
    display: 'flex',
    maxWidth: '320px',
    margin: '0 auto',
    height: '100%',
    padding: '50px',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}
