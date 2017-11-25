import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operations: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let operator;
    console.log(e.target.id);
    console.log(this.state.operations);
    if (e.target.id !== 'ac' && e.target.id !== 'remove' && e.target.id !== '=') {
      operator = [...this.state.operations, (e.target.id).toString()];
      this.setState({ operations: operator });
    } else if (e.target.id === 'ac') {
      operator = [];
      this.setState({ operations: operator });
    } else if (e.target.id === 'remove') {
      operator = [...this.state.operations];
      operator.pop();
      this.setState({ operations: operator });
    } else if (e.target.id === '=') {
      const operations = [...this.state.operations];
      const charOp = operations.filter(el => (el === '+' || el === '-' || el === 'x' || el === '÷')).slice(0);
      const op1 = parseFloat(operations.slice(0, operations.indexOf(charOp[0])).join(''));
      const op2 = parseFloat(operations.slice(operations.indexOf(charOp[0]) + 1, operations.length).join(''));
      switch (charOp[0]) {
        case '+':
          this.setState({ operations: [op1 + op2] });
          break;
        case '-':
          this.setState({ operations: [op1 - op2] });
          break;
        case 'x':
          this.setState({ operations: [op1 * op2] });
          break;
        case '÷':
          this.setState({ operations: [op1 / op2] });
          break;
        default:
          break;
      }
    }
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.operations[0] > 999999999 ? 
            <h3> Error </h3> :
            <h3> { this.state.operations } </h3>
          }
        </div>
        <div>
          <button
            className="special-one"
            id="ac" 
            onClick={this.handleClick}
          >
            AC
          </button>
          <button
            className="special-one"
            id="remove" 
            onClick={this.handleClick}
          >
            ←
          </button>
          <button 
            id="÷" 
            onClick={this.handleClick}
          >
            ÷
          </button>
        </div>
        <div>
          <button 
            id="7" 
            onClick={this.handleClick}
          >
            7
          </button>
          <button 
            id="8" 
            onClick={this.handleClick}
          >
            8
          </button>
          <button 
            id="9" 
            onClick={this.handleClick}
          >
            9
          </button>
          <button 
            id="x" 
            onClick={this.handleClick}
          >
            x
          </button>
        </div>
        <div >
          <button 
            id="4" 
            onClick={this.handleClick}
          >
            4
          </button>
          <button 
            id="5" 
            onClick={this.handleClick}
          >
            5
          </button>
          <button 
            id="6" 
            onClick={this.handleClick}
          >
            6
          </button>
          <button 
            id="-" 
            onClick={this.handleClick}
          >
            -
          </button>
        </div>
        <div>
          <button 
            id="1" 
            onClick={this.handleClick}
          >
            1
          </button>
          <button 
            id="2" 
            onClick={this.handleClick}
          >
            2
          </button>
          <button 
            id="3" 
            onClick={this.handleClick}
          >
            3
          </button>
          <button 
            id="+" 
            onClick={this.handleClick}
          >
            +
          </button>
        </div>
        <div>
          <button 
            className="special-one"
            id="0" 
            onClick={this.handleClick}
          >
            0
          </button>
          <button
            className="special-one"
            id="." 
            onClick={this.handleClick}
          >
            .
          </button>
          <button 
            id="=" 
            onClick={this.handleClick}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
