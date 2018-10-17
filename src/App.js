import React, { Component } from 'react';
import loggify from './loggify'

class App extends Component {
  static displayName = "App"

  // state = {
  //   ourInitialState: "golden"
  // }

  render() {
    // this.setState-- noo!! never
    // console.log(this.state)

    //disassemble some object thats in state
    //but you might also be able to do some calculations
    return (
      <div>
        hello
      </div>
    );
  }
}

App = loggify(App);
// App.defaultProps = {someImportArray: []}

export default App;
