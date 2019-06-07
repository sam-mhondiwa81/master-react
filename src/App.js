import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = { 
    persons: [
      { name:'Sam', age: 38 },
      { name: 'Joe', age: 22 },
      { name: 'Demi', age: 5 }
    ]
  };

  switchNameHandler = (newName) => {
    //console.log('Was clicked!!!!');
    //DO NOT DO THIS this.state.person[0].name = 'Dhaka';
    this.setState({persons: [
      { name:newName, age: 38 },
      { name: 'Joe', age: 22 },
      { name: 'Demi', age: 10 }
    ],
    otherState: 'Some othe value',
    showPersons: false
  })
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { id:'23rty', name: 'Dhakalo', age: 38 },
      { id:'7uhgjg', name: event.target.value, age: 22 },
      { id:'8ihhfn', name: 'Demi', age: 10 }
    ]})
  }

  deletePersonHandler = (personIndex) => {
   const persons = [...this.state.persons];
   persons.splice(personIndex, 1);
   this.setState({persons: persons});
  }

  togglePersonHandler = (event, id) => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons: !doesShow});
   

  }

  render(){
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };


    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
     </div>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

  const classes = [];
  if(this.state.persons.length <= 2){
   classes.push('red');
  }

  if(this.state.persons.length <= 1){
    classes.push('bold');
   }

  return (
    
    <div className="App">
     <h1>Hi I am react App</h1>
     <p className={classes.join(' ')}>This is really working</p>
     <button 
     style={style}
     onClick={this.togglePersonHandler}>Toggle Persons</button>
    {persons}
  </div>
 
    
  );
  }
}

export default App;
