import React, { useState } from 'react';
import './App.css';
import Person from './components/Person/Person';

function App() {

  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Marcelo' },
      { name: 'Duda' },
      { name: 'Osvaldo' },
      { name: 'Oliva' }
    ]
  });

  const changeNameHandler = (oldName, newName) => {
    const stateClone = { ...personState };
    stateClone.persons.find(person => person.name == oldName).name = newName;
    setPersonState(stateClone);
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      {personState.persons.map((person, index) => <Person key={index} name={person.name} changed={changeNameHandler} />)}
    </div>
  );
}

export default App;
