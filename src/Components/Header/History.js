import React, { Component } from "react";

import "./Header.css";
class History extends Component {
  constructor(props) {
    super(props);
    this.resultRef = React.createRef()
    this.expressionRef = React.createRef()

    this.state = {
      list: this.props.history
    }
  }

  handleRemoveItem = item => {
    let newArr = this.props.history.splice(this.props.history.indexOf(item) - 1, 1);
    this.setState({ list: newArr });
  }
  
  copyResult = item => {
    let index = item.indexOf("=");
    this.props.setExressions(this.props.expression + parseFloat(item.substring(index + 1)));
  }

  render() {
    return (
      <div className="header custom-scroll">
        <div className="header_history">
          {this.props.history &&
            this.props.history?.map((item) => (
              <p key={item + "" + Math.random() * 44}>{<span onClick={() => this.copyResult(item)}>{item}</span>} <button onClick={() => this.handleRemoveItem(item)}>X</button></p>
            ))}
        </div>
        <br />
        <div ref={this.expressionRef} className="header_expression custom-scroll">
          <p>{this.props.expression}</p>
        </div>
        <p ref={this.resultRef} className="header_result">
          {this.props.result}
        </p>
      </div>
    );
  }
}
export default History;
