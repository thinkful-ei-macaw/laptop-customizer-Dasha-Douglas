import React from "react";

export default class Customize extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {this.props.features}
      </form>
    );
  }
}
