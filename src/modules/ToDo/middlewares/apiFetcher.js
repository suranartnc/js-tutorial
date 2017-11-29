const apiFetcher = () => next => action => {
  const { api, ...rest } = action
  if (!api) {
    return next(action)
  }

  return fetch(api.url)
    .then(res => res.json())
    .then(data => {
      next({
        ...rest,
        data
      })
    })
    .catch(error => console.log(error))
}

export default apiFetcher
