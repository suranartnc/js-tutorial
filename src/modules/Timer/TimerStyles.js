export default {
  app: {
    backgroundColor: '#000',
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
    justifyContent: 'space-around'
  },
  panel: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  button: {
    cursor: 'pointer',
    border: '0',
    width: '64px',
    height: '64px',
    padding: '5px',
    backgroundColor: '#000',
    fontWeight: 'bold',
    fontSize: '2.4rem',
    color: '#bf2615'
  },
  counter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000',
    textAlign: 'center',
    border: '5px solid #bf2615',
    borderRadius: '50%',
    fontSize: '6rem',
    width: '220px',
    height: '220px',
    margin: '0 auto',
    color: '#fff'
  },
  laps: {
    backgroundColor: 'white',
    width: '100%',
    height: '100px',
    overflow: 'auto',
    borderRadius: '5px',
    textAlign: 'center',
    padding: '10px',
    fontSize: '1.8rem'
  }
}
