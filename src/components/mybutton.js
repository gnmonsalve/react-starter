import React, { Component, StyleSheet } from 'react'
import { Button } from 'react-bootstrap';

export default class MyButton extends Component {
 constructor(props) {
   super(props);
   this.state = {
     message: props.message
   };
   this.handleClick = this.handleClick.bind(this);
 }

 handleClick(event) {
   console.log('Enviar');
   fetch('http://localhost:3001/',{
    method: 'POST',
    body: JSON.stringify({
      newmessage: this.message
    })
})

 }
 render() {
   return (
       <Button bsStyle="primary" bsSize="large" onClick={this.handleClick}>{this.message}</Button>
   );
 }
}
