import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/person.js';

class App extends Component {
  state = {
    name:'arushi',
  }
      cursor=(newname)=>{
       this.setState(
         {name:newname}
         )
      }
      increment=(event)=>{
        this.setState(
          {
            name:event.target.value
          }
        )
      }
  
  render() {
    return (
      
      <div className="App"> 
       {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    */}
    <button onClick={this.cursor.bind(this,'cse')}>click me</button>
    <Person name={this.state.name} click={this.cursor.bind(this,'engineer')} x={this.increment}></Person>
    <Person/>

    <Person> I am creative </Person>
      </div>
    );
    

   //return React.createElement('div',null,'h1',"hello there");
  }
}

export default App;
