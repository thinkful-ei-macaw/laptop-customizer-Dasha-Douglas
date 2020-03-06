import React from 'react'
import Features from './Features'

class Customize extends React.Component {

  render () {
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <Features features={this.props.features} />
    </form>
  )
  }
}

export default Customize;
