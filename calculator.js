
const dec = /[.]/;
const equal = /=/;
const zero = /^[0]/;
const num = /[1-9]+/;
const operator = /([-|*|+|/])$/;
const minus = /[\u002D]$/;
const trip = /[^0-9]{3}$/
const dub = /[\D]{2}$/

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      display: []
    };
    this.revertState = this.revertState.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleOne = this.handleOne.bind(this);
    this.handleTwo = this.handleTwo.bind(this);
    this.handleThree = this.handleThree.bind(this);
    this.handleFour = this.handleFour.bind(this);
    this.handleFive = this.handleFive.bind(this);
    this.handleSix = this.handleSix.bind(this);
    this.handleSeven = this.handleSeven.bind(this);
    this.handleEight = this.handleEight.bind(this);
    this.handleNine = this.handleNine.bind(this);
    this.handleZero = this.handleZero.bind(this);
    }
  
  revertState() {
      this.setState({
        input: "0",
        display: []
      });
  }
  handleEquals() {
    let a = this.state.display.join('');
    let b = a.replaceAll('--', '+');
    let y = eval(b)
      this.setState({
        input: y
      });
      this.state.display.push('=');
      this.state.display.push(y);
    }
  
  handleDecimal() {
    let pattern = /[.]/;
   if(pattern.test(this.state.input) == false) {
     if(this.state.input == '0') {
       this.state.display.push('0');
     };
     this.setState((state) => ({
       input: state.input + '.'
     }));
     this.state.display.push('.');
   }
  }
  handleAdd() {  if(equal.test(this.state.display) == false) {
     this.setState({
       input: '+'
     });
    console.log(dub.test(this.state.display));
if (dub.test(this.state.display.join('')) == true) {
  this.state.display.pop();
  this.state.display.pop();
  this.state.display.push('+')
} else if(operator.test(this.state.display) == true ) {
       this.state.display.pop();     this.state.display.push('+');
     } else {
    this.state.display.push('+')
     };
   } else {
     this.setState({
       display: [this.state.input,'+']
     });
      this.setState({
        input: '+'
      });
    }
  } 
  
  handleSubtract() {
    console.log(trip.test(this.state.display));
    console.log('test')
    if(equal.test(this.state.display) == false) {
     this.setState({
       input: '-'
     });
   if (trip.test(this.state.display) == true) {
     this.state.display.pop();
     this.state.display.push('-');
   } else if (operator.test(this.state.display) == true) {
     this.state.display.push('-');
   } else if(minus.test(this.state.display) == true) {
       this.state.display.pop();
     this.state.display.push('-');
    } else {
      this.state.display.push('-');
    }
   } else {
     this.setState({
       display: [this.state.input,'-']
     });
      this.setState({
        input: '-'
      });
    }
  } 
  
  handleMultiply() {
     if(equal.test(this.state.display) == false) {
     this.setState({
       input: '*'
     });
    if (dub.test(this.state.display.join('')) == true) {
  this.state.display.pop();
  this.state.display.pop();
  this.state.display.push('*')
} else if(operator.test(this.state.display) == true) {
       this.state.display.pop();
     this.state.display.push('*');
     } else {
       this.state.display.push('*')
     };
   } else {
     this.setState({
       display: [this.state.input, '*']
     });
   if(operator.test(this.state.display) == true) {
       this.state.display.pop();
     this.state.display.push('*');
     } else {
       this.state.display.push('*')
     }
      this.setState({
        input: '*'
      });
    }
  } 
  
  handleDivide() {
      if(equal.test(this.state.display) == false) {
     this.setState({
       input: '/'
     });
      if (dub.test(this.state.display.join('')) == true) {
  this.state.display.pop();
  this.state.display.pop();
  this.state.display.push('/')
} else 
if(operator.test(this.state.display) == true) {
       this.state.display.pop();
     this.state.display.push('/');
     } else {
       this.state.display.push('/')
     };
   } else {
     this.setState({
       display: [this.state.input, '/']
     });
   if(operator.test(this.state.display) == true) {
       this.state.display.pop();
     this.state.display.push('/');
     } else {
       this.state.display.push('/')
     }
      this.setState({
        input: '/'
      });
    }
  } 
  
  handleOne() {
    if (zero.test(this.state.input) == true && dec.test(this.state.input) == true) {
      this.setState((state) => ({
        input: state.input + '1'
      }));
      this.state.display.push('1');
    } else if (zero.test(this.state.input) == true) {
      this.setState({
        input: '1'
      });
      this.state.display.pop();
      this.state.display.push('1');
    } else {
    if (num.test(this.state.input) == true ) {
    this.setState((state) => ({
      input: state.input + '1'
    }));
    this.state.display.push('1')
    } else { this.setState({
        input: '1'
      });
      this.state.display.push('1');
      }
    }
  }
  handleTwo()  {
     if (zero.test(this.state.input) == true && dec.test(this.state.input) == true) {
      this.setState((state) => ({
        input: state.input + '2'
      }));
      this.state.display.push('2');
    } else if (zero.test(this.state.input) == true) {
      this.setState({
        input: '2'
      });
      this.state.display.pop();
      this.state.display.push('2');
    } else {
    if (num.test(this.state.input) == true ) {
    this.setState((state) => ({
      input: state.input + '2'
    }));
    this.state.display.push('2')
    } else { this.setState({
        input: '2'
      });
      this.state.display.push('2');
      }
    }
  }
  handleThree()  {
     if (zero.test(this.state.input) == true && dec.test(this.state.input) == true) {
      this.setState((state) => ({
        input: state.input + '3'
      }));
      this.state.display.push('3');
    } else if (zero.test(this.state.input) == true) {
      this.setState({
        input: '3'
      });
      this.state.display.pop();
      this.state.display.push('3');
    } else {
    if (num.test(this.state.input) == true ) {
    this.setState((state) => ({
      input: state.input + '3'
    }));
    this.state.display.push('3')
    } else { this.setState({
        input: '3'
      });
      this.state.display.push('3');
      }
    }
  }
  handleFour()  {
     if (zero.test(this.state.input) == true && dec.test(this.state.input) == true) {
      this.setState((state) => ({
        input: state.input + '4'
      }));
      this.state.display.push('4');
    } else if (zero.test(this.state.input) == true) {
      this.setState({
        input: '4'
      });
      this.state.display.pop();
      this.state.display.push('4');
    } else {
    if (num.test(this.state.input) == true ) {
    this.setState((state) => ({
      input: state.input + '4'
    }));
    this.state.display.push('4')
    } else { this.setState({
        input: '4'
      });
      this.state.display.push('4');
      }
    }
  }
  handleFive()  {
     if (zero.test(this.state.input) == true && dec.test(this.state.input) == true) {
      this.setState((state) => ({
        input: state.input + '5'
      }));
      this.state.display.push('5');
    } else if (zero.test(this.state.input) == true) {
      this.setState({
        input: '5'
      });
      this.state.display.pop();
      this.state.display.push('5');
    } else {
    if (num.test(this.state.input) == true ) {
    this.setState((state) => ({
      input: state.input + '5'
    }));
    this.state.display.push('5')
    } else { this.setState({
        input: '5'
      });
      this.state.display.push('5');
      }
    }
  }
  handleSix()  {
     if (zero.test(this.state.input) == true && dec.test(this.state.input) == true) {
      this.setState((state) => ({
        input: state.input + '6'
      }));
      this.state.display.push('6');
    } else if (zero.test(this.state.input) == true) {
      this.setState({
        input: '6'
      });
      this.state.display.pop();
      this.state.display.push('6');
    } else {
    if (num.test(this.state.input) == true ) {
    this.setState((state) => ({
      input: state.input + '6'
    }));
    this.state.display.push('6')
    } else { this.setState({
        input: '6'
      });
      this.state.display.push('6');
      }
    }
  }
  handleSeven()  {
     if (zero.test(this.state.input) == true && dec.test(this.state.input) == true) {
      this.setState((state) => ({
        input: state.input + '7'
      }));
      this.state.display.push('7');
    } else if (zero.test(this.state.input) == true) {
      this.setState({
        input: '7'
      });
      this.state.display.pop();
      this.state.display.push('7');
    } else {
    if (num.test(this.state.input) == true ) {
    this.setState((state) => ({
      input: state.input + '7'
    }));
    this.state.display.push('7')
    } else { this.setState({
        input: '7'
      });
      this.state.display.push('7');
      }
    }
  }
  handleEight()  {
     if (zero.test(this.state.input) == true && dec.test(this.state.input) == true) {
      this.setState((state) => ({
        input: state.input + '8'
      }));
      this.state.display.push('8');
    } else if (zero.test(this.state.input) == true) {
      this.setState({
        input: '8'
      });
      this.state.display.pop();
      this.state.display.push('8');
    } else {
    if (num.test(this.state.input) == true ) {
    this.setState((state) => ({
      input: state.input + '8'
    }));
    this.state.display.push('8')
    } else { this.setState({
        input: '8'
      });
      this.state.display.push('8');
      }
    }
  }
  handleNine()  {
     if (zero.test(this.state.input) == true && dec.test(this.state.input) == true) {
      this.setState((state) => ({
        input: state.input + '9'
      }));
      this.state.display.push('9');
    } else if (zero.test(this.state.input) == true) {
      this.setState({
        input: '9'
      });
      this.state.display.pop();
      this.state.display.push('9');
    } else {
    if (num.test(this.state.input) == true ) {
    this.setState((state) => ({
      input: state.input + '9'
    }));
    this.state.display.push('9')
    } else { this.setState({
        input: '9'
      });
      this.state.display.push('9');
      }
    }
  }
  handleZero() {
    if(operator.test(this.state.input) == true) {
      this.setState({
        input: '0'
      });
      this.state.display.push('0');
    } else {
   if(this.state.input == 0 && this.state.display.length == 0 ) {
      this.setState((state) => ({
        input: '0'
      }));
     this.state.display.push('0');
  } else if(this.state.input == 0) {
    this
  } else {
    this.setState((state) => ({
      input: state.input + '0',
        }))
    this.state.display.push('0')
      }
    }
  }
  render() {
   console.log(this.state.display)
    return <div class="calculator" id="calc">
      <div id="work-display">{this.state.display}</div>
      <div id="display">
        <h3 id="output">{this.state.input}</h3>
        </div>
      <div id="clear" onClick={this.revertState}>AC</div>
      <div id="divide" onClick={this.handleDivide}>/</div>
      <div id="multiply" onClick={this.handleMultiply}>X</div>
      <div id="add" onClick={this.handleAdd}>+</div>
      <div id="subtract" onClick={this.handleSubtract}>-</div>
      <div id="decimal" onClick={this.handleDecimal}>.</div>
      <div id="nine" onClick={this.handleNine}>9</div>
      <div id="eight" onClick={this.handleEight}>8</div>
      <div id="seven" onClick={this.handleSeven}>7</div>
      <div id="six" onClick={this.handleSix}>6</div>
      <div id="five" onClick={this.handleFive}>5</div>
      <div id="four" onClick={this.handleFour}>4</div>
      <div id="three" onClick={this.handleThree}>3</div>
      <div id="two" onClick={this.handleTwo}>2</div>
      <div id="one" onClick={this.handleOne}>1</div>
      <div id="zero" onClick={this.handleZero}><p>0</p></div>
      <div id="equals" onClick={this.handleEquals}>=</div>
    </div>;
  }
}
ReactDOM.render(<Calculator />, document.getElementById('target'));
document.getElementById('calc').style.cursor = "pointer";
