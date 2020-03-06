import React from 'react'
import Total from './Total'


export default function Cart(props){
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {props.summary}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          <Total currency={props.currency} total={props.total}/>
        </div>
      </div>
    </section>
  )
}