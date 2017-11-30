const apiFetcher = () => next => action => {
  const { api, ...rest } = action
  if (!api) {
    return next(action)
  }

  return fetch(api.url)
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
        next({
          ...rest,
          data
        })
      }, 1500)
    })
    .catch(error => console.log(error))
}

export default apiFetcher
