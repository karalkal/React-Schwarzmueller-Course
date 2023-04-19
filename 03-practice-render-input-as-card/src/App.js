import Form from './components/Form'
import Cards from './components/Cards'
import Modal from './components/Modal';
import "./App.css"
import { useState } from 'react';

function App() {
  const [entries, setEntries] = useState([])
  const [showModal, setShowModal] = useState(true)
  

  function addNewEntry(entry) {
    setEntries(prevEntries => [entry, ...prevEntries])
  }


  return (
    <div id="main-container">
      <Form addNewEntry={addNewEntry} />

      {entries.length > 0 && <Cards entries={entries} />}
      {/* display results section only if array is not empty */}

      <Modal
        handleClose={() => setShowModal(false)}
        show={showModal}
      />
    </div>
  );
}

export default App;
