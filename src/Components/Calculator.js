import React, { Component } from 'react'
import {Button} from 'primereact/button'
import {InputText} from 'primereact/inputtext';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentInput: "",
      operator: null,
      firstVal: "",
      secondVal: "",
      answer: ""
    }
  }

clickHandler(value) {
  this.setState({
    currentInput: this.state.currentInput + value
  })
  // switch(value) {
  //   case "/":
  //     this.setState = {
  //       operator: "/"
  //     }
  //   case "x":
  //     this.setState = {
  //       operator: "x"
  //     }
  //   case "-":
  //     this.setState = {
  //       operator: "-"
  //     }
  //   case "+":
  //     this.setState = {
  //       operator: "+"
  //     }
  //   case "=":
  //     this.setState = {
  //       operator: "="
  //     }
  //   default:
  //     if (this.state.operator = null) {
  //       console.log("testing")
  //     }
  // }
}

changeHandler() {

}

  render() {
    const values1 = ["7", "8", "9", "/"]
    const values2 = ["4", "5", "6", "x"]
    const values3 = ["1", "2", "3", "-"]
    const values4 = ["0", ".", "+", "="]
    const valuesList1 = values1.map(value => <td key={value}><Button className="p-button-secondary" onClick={() => {this.clickHandler(value)}} label={value} /></td>)
    const valuesList2 = values2.map(value => <td key={value}><Button className="p-button-secondary" onClick={() => {this.clickHandler(value)}} label={value} /></td>)
    const valuesList3 = values3.map(value => <td key={value}><Button className="p-button-secondary" onClick={() => {this.clickHandler(value)}} label={value} /></td>)
    const valuesList4 = values4.map(value => <td key={value}><Button className="p-button-secondary" onClick={() => {this.clickHandler(value)}} label={value} /></td>)

    return (
      <div className="Middle">
        <section className="Container">
          <div className="InputContainer">
            <InputText value={this.state.currentInput} onChange={() => this.changeHandler()} />
          </div>
          <table className="Keys">
            <tbody>
              <tr>
                {valuesList1}
              </tr>
              <tr>
                {valuesList2}
              </tr>
              <tr>
                {valuesList3}
              </tr>
              <tr>
                {valuesList4}
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }

}

export default Calculator;
