import React from 'react'

export default function Total(props) {
  return (
    <>
      {props.currency.format(props.total)}
    </>
  )
}