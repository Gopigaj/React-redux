import React, { Component } from "react";

import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  /*constructor(props) {
    super(props);

    this.state = {
      age: 21
    };

    this.onClickInc = this.onClickInc.bind(this);
    this.onClickDec = this.onClickDec.bind(this);
  }

  onClickInc() {
    this.setState({
      age: ++this.state.age
    });
    console.log(this.state.age);
  }

  onClickDec() {
    this.setState({
      age: --this.state.age
    });
    console.log(this.state.age);
  }
*/
  render() {
    return (
      <div className="App">
        <p>
          Age: <span>{this.props.age}</span>
        </p>
        <button onClick={this.props.onClickInc}>INC</button>
        <button onClick={this.props.onClickDec}>DEC</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClickInc: () => dispatch({ type: "clickInc" }),
    onClickDec: () => dispatch({ type: "clickDec" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
