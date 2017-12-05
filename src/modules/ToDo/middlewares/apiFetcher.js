const apiFetcher = ({ dispatch }) => next => action => {
  const { api, ...rest } = action
  if (!api) {
    return next(action)
  }

  dispatch({
    type: `${action.type}_REQUEST`,
    loading: true
  })

  return fetch(api.url)
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
        next({
          ...rest,
          data,
          loading: false
        })
      }, 0)
    })
    .catch(error => console.log(error))
}

export default apiFetcher
