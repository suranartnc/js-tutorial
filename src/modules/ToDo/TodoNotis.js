import React from 'react'

export default function ToDoNotis({ notis }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '15px',
        background: '#000',
        color: '#fff'
      }}
    >
      {notis.map(function(noti, index) {
        return <p key={index}>{noti.message}</p>
      })}
    </div>
  )
}
