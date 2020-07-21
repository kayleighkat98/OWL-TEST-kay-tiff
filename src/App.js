import React from 'react';
import Participants from './Participants'

function App (props) {
  console.log(props)
  return (
    <main className='App'>
      <Participants color= 'green'/>
    </main>
  );
}

export default App;
