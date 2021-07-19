import React from 'react'

/*class App extends React.Component {
  render() {
    return <button>Click</button>
  }
}*/

class App extends React.Component {
  
  handleClick = () => {
    console.log("btn clicked");
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click 
      </button>
    );
  }
}

export default App;
