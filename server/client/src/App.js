import React, { Component } from 'react';

const style = {
  margin: '50px'
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style}>
        <a href="/auth/google">Sign in with Google</a>
      </div>
    );
  }
}

export default App;
