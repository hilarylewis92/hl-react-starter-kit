import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class DisplayMessages extends Component {

  render(){
    const {messages} = this.props;

    return(
      <ul className='message-field'>
        {messages.map(message =>{
          return (
            <li className='single-message' key={message.key}>
              <span className = 'timestamp'>{message.createdAt}</span>
              <span className = 'username'>{message.user.displayName}</span>
              <br/>
              <span className= 'message-content'>{message.content}</span>
            </li>
          );
        })
      }
      </ul>
    );
  }
}
