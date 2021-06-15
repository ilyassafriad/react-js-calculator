import React from 'react';
import './App.css' ;

class App extends React.Component{
  state = {
    arr:[],
    numbers:'',
    operation:'',
    oper:[],
    nums:''
  }


  handleClick=(e)=>{
    this.state.arr.push(e.target.value)
    this.setState({numbers: this.state.arr})
  }
  handleOperation=(s)=>{
    this.setState({operation: s.target.value})

    this.handleClick = (e)=>{
      this.state.oper.push(e.target.value)
      this.setState({nums: this.state.oper})
    }
  }

  handleClear=()=>{
    this.setState({arr: []})
    this.setState({numbers: ''})
    this.setState({operation: ''})
    this.setState({oper : []})
    this.setState({nums: ''})


    this.handleClick=(e)=>{
      this.state.arr.push(e.target.value)
      this.setState({numbers: this.state.arr})
    }
  }

  handleDelete = ()=>{

    if(this.state.nums === ''){
      this.state.arr = this.state.arr.slice(0, -1)
      this.setState({numbers: this.state.arr})
    } else{
      this.state.oper = this.state.oper.slice(0, -1)
      this.setState({nums: this.state.oper})
    }
  }


  handleEqual = ()=>{

    if(this.state.operation === '+'){
      this.setState({operation: "="})
      this.setState({nums: parseInt(this.state.numbers.join("")) + parseInt(this.state.nums.join("")) })
    }

    if(this.state.operation === '-'){
      this.setState({operation: "="})
      this.setState({nums: parseInt(this.state.numbers.join("")) - parseInt(this.state.nums.join("")) })
    }

    if(this.state.operation === "*"){
      this.setState({operation: "="})
      this.setState({ nums: parseInt(this.state.numbers.join("")) * parseInt(this.state.nums.join("")) })
    }

    if(this.state.operation === "/"){
      this.setState({operation: "="})
      this.setState({nums: parseInt(this.state.numbers.join("")) / parseInt(this.state.nums.join("")) })
    }
  }

  render(){
    const Header = ()=>{
      return(
        <div className="container">
          <div className="current_number">{this.state.numbers}</div>
          <div className="prev_number">{this.state.operation} <span>{this.state.nums}</span></div>
        </div>
      )
    }
    const Body = ()=>{
      return(
        <div className="buttons">
          <p>
            <button id="span" onClick={this.handleClear}>AC</button>
            <button onClick={this.handleDelete}>DEL</button>
            <button onClick={this.handleOperation} value="/">/</button>
          </p>

          <p>
            <button onClick={this.handleClick} value="7">7</button>
            <button onClick={this.handleClick} value="8">8</button>
            <button onClick={this.handleClick} value="9">9</button>
            <button onClick={this.handleOperation} value="*">*</button>
          </p>

          <p>
            <button onClick={this.handleClick} value="4">4</button>
            <button onClick={this.handleClick} value="5">5</button>
            <button onClick={this.handleClick} value="6">6</button>
            <button onClick={this.handleOperation} value="+">+</button>
          </p>

          <p>
            <button onClick={this.handleClick} value="1">1</button>
            <button onClick={this.handleClick} value="2">2</button>
            <button onClick={this.handleClick} value="3">3</button>
            <button onClick={this.handleOperation} value="-">-</button>
          </p>

          <p>
            <button onClick={this.handleClick} value="0">0</button>
            <button onClick={this.handleClick} value=",">,</button>
            <button id="span" onClick={this.handleEqual}>=</button>
          </p>
        </div>
      )
    }

    return(
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}


export default App;