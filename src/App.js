import React, { Component } from 'react';
import loggify from './loggify'

class App extends Component {
  static displayName = "App"

  state = {
    data: "No data yet"
  }

  fetchData = () => {
    console.log("Going to fetch data")
    setTimeout(
      () => {
        console.log("Data retreived")
        this.setState({
          data: Math.random()
        })
      },
      1500
    )
  }

  componentDidMount(){
    this.fetchData()
    const canvasCtx = this.refs.appCanvas.getContext('2d')
    canvasCtx.fillStyle = "blue"
    canvasCtx.arc(75, 75, 50, 0, 2 * Math.PI)
    canvasCtx.fill()
  }

  render() {

    // this.setState-- noo!! never
    // console.log(this.state)

    //disassemble some object thats in state
    let {showPollChild} =  this.state
    //but you might also be able to do some calculations
    return (
      <div>
        hello

        <h4>{this.state.data}</h4>

      <canvas
        ref={"appCanvas"}
        height={200}
        width={200}
      />

    <button
      onClick={() => {
        this.setState((prevState) => {
          return {
            showPollChild: !prevState.showPollChild
          }
        })
      }}
      >
      {(showPollChild) ? "Hide" : "Show"} PollChild
    </button>
    {(showPollChild) ? <PollChild /> : null}

      </div>
    );
  }
}


class PollChild extends Component {
  static displayName = "PollChild"

  state = {
    poll: "No poll yet"
  }


  componentDidMount() {
      this.pollData()
  }
  componentWillUnmount() {
      clearInterval(this.pollInterval)
  }

  pollData = () => {
    this.pollInterval = setInterval(
    () => {
      console.log("Poll!")
      this.setState ({
        poll: Math.random()
      })
    },
    1000
    )
  }

  render() {
    return (
      <h4>poll: {this.state.poll}</h4>
    )
  }
}

App = loggify(App);
PollChild = loggify(PollChild);
// App.defaultProps = {someImportArray: []}

export default App;
