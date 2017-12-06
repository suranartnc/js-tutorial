import React from 'react'

export default function EntryPage({ match }) {
  const id = match.params.id
  const api = `http://localhost:3000/posts/${id}/`

  return (
    <div>
      <h1>Title for #{id}</h1>
      <p>&nbsp;</p>
      <article>
        <p>
          Fetch data from&nbsp;
          <a href={api} target="_blank">
            {api}
          </a>
        </p>
      </article>
    </div>
  )
}
