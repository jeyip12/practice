import React, { Component } from 'react';
import Container from './container'

class Containers extends Component {
  render() {
    let arr = [];
    for(let i = 0; i < 4; i++) {
      arr.push(<Container />)
    }
    return (
      <div>
        {arr}
      </div>
    );
  }
}

export default Containers;