import Form from './components/Form'
import Cards from './components/Cards'
import "./App.css"
import { useState } from 'react';

function App() {
  const [entries, setEntries] = useState([])

  function addNewEntry(entry) {
    setEntries(prevEntries =>[ entry, ...prevEntries])
  }


  return (
    <div id="main-container">
        <Form addNewEntry={addNewEntry}/>
        <Cards entries={entries}/>
    </div>
  );
}

export default App;
