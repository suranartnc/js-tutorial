import React from 'react'

export default function EntryPage({ match }) {
  return (
    <div>
      <h1>Title for: {match.params.id}</h1>
      <article>This is body.</article>
    </div>
  )
}
