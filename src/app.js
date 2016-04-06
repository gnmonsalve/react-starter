import React, { Component } from 'react'

import HelloWorld from './components/helloworld'
import Inptext from './components/inptext'
import MyButton from './components/mybutton'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: 'default',
      messages: []
    };
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onChange(e) {
    this.setState({ input: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
        fetch(
      'http://localhost:3001/add',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            newmessage: this.state.input
          }
        ),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
  }

  onClick(e){
    fetch('http://localhost:3001/messages')
    .then(result => result.json())
    .then(result => this.setState({ messages: result.messages }))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Ingrese un nuevo mensaje</h1>
        <input type="text" onChange={this.onChange}></input>
        <p>{this.state.input}</p>
        <h1>Mensajes enviados</h1>
        <button onClick={this.onClick}>Press me</button>
        <ol>
          {this.state.messages.map(message => {
            return <li>{message}</li>;
          })}
        </ol>
      </form>
    )
  }
}
