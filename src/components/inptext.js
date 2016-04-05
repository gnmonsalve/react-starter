 import React, { Component, StyleSheet } from 'react'


export default class Inptext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialMessage
    };
    this.setState = this.setState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>{this.state.value}</p>
      </div>
    );
  }
}
