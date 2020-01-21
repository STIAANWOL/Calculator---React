import React, { Component } from 'react'
import {Button} from 'primereact/button'
import {InputText} from 'primereact/inputtext';

class Calculator extends Component {

  //Declare initial state variables
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

  //Switch statement to check which type of button has been clicked
  //Assign operator state to correct value based on button clicked for each case
  switch(value) {
    case "/":
      this.setState ({
        operator: "/",
        firstVal: this.state.currentInput,
        currentInput: ""
      })
      break;
    case "x":
      this.setState({
        operator: "x",
        firstVal: this.state.currentInput,
        currentInput: ""
      })
      break;
    case "-":
      this.setState({
        operator: "-",
        firstVal: this.state.currentInput,
        currentInput: ""
      })
      break;
    case "+":
      this.setState({
        operator: "+",
        firstVal: this.state.currentInput,
        currentInput: ""
      })
      break;
    case "=":
    //Check if there is a first value for each operator
      if (this.state.firstVal !== "" & this.state.operator === "+") {
        this.setState({
          secondVal: this.state.currentInput,
          currentInput: ""
        //Will run before the setState method and turn string values into ints
        }, () => {
          let answer = Math.trunc(this.state.firstVal) + Math.trunc(this.state.secondVal)
          this.setState({
            currentInput: answer
          })
        })
      }
      else if (this.state.firstVal !== "" & this.state.operator === "-") {
        this.setState({
          secondVal: this.state.currentInput,
          currentInput: ""
        }, () => {
          let answer = Math.trunc(this.state.firstVal) - Math.trunc(this.state.secondVal)
          this.setState({
            currentInput: answer
          })
        })
      }
      else if (this.state.firstVal !== "" & this.state.operator === "/") {
        this.setState({
          secondVal: this.state.currentInput,
          currentInput: ""
        }, () => {
          let answer = Math.trunc(this.state.firstVal) / Math.trunc(this.state.secondVal)
          this.setState({
            currentInput: answer
          })
        })
      }
      else if (this.state.firstVal !== "" & this.state.operator === "x") {
        this.setState({
          secondVal: this.state.currentInput,
          currentInput: ""
        }, () => {
          let answer = Math.trunc(this.state.firstVal) * Math.trunc(this.state.secondVal)
          this.setState({
            currentInput: answer
          })
        })
      }
      else {
        this.setState({
          operator: "=",
          currentInput: this.currentInput
        })
      }
      break;
    default:
      if (this.state.firstVal !== "" & this.state.secondVal !== ""){
        this.setState({
          firstVal: "",
          secondVal: "",
          currentInput: this.state.currentInput + value
        })
      }
      this.setState({
        currentInput: this.state.currentInput + value
      })
    }
}

  render() {
    //Create value arrays
    const values1 = ["7", "8", "9", "/"]
    const values2 = ["4", "5", "6", "x"]
    const values3 = ["1", "2", "3", "-"]
    const values4 = ["0", ".", "+", "="]
    //Map the value arrays to buttons with onclick methods
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
