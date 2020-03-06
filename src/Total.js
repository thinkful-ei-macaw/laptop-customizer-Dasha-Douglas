import React from "react";

export function Total(props) {
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {USCurrencyFormat.format(this.props.total)}
      </div>
    </div>
  );
}
