import { useState } from 'react';
import ReactDOM from "react-dom"

import "./App.css"

import Form from './components/Form'
import Cards from './components/Cards'
import Modal from './components/Modal';


function App() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState({
    display: false,
    message: ""
  })


  function addNewEntry(entry) {
    setEntries(prevEntries => [entry, ...prevEntries])
  }


  return (
    <div id="main-container">

      <Form
        addNewEntry={addNewEntry}
        onError={(message) => setError({ display: true, message })} />

      {/* display results section only if array is not empty */}
      {entries.length > 0 && <Cards entries={entries} />}

      {ReactDOM.createPortal(
        <Modal
          hideModal={() => setError({ display: false, message: "" })}
          error={error} />,
        document.getElementById('modal-root'))}

    </div>
  );
}

export default App;
