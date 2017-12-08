import React from 'react'
import { Link } from 'react-router-dom'

export default function EntryPage({ entryDetail, entryList }) {
  return (
    <div>
      <h1>{entryDetail.title}</h1>
      <p>&nbsp;</p>
      <article>
        <p dangerouslySetInnerHTML={{ __html: entryDetail.body }} />
      </article>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <div>
        {entryList.map(function(entry) {
          return (
            <h2 key={entry.id}>
              <Link to={`/entry/${entry.id}/`}>{entry.title}</Link>
            </h2>
          )
        })}
      </div>
    </div>
  )
}
