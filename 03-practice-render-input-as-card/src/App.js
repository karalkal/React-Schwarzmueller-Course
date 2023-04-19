import { useState } from 'react';
import Form from './components/Form'
import Cards from './components/Cards'
import Modal from './components/Modal';
import "./App.css"


function App() {
  const [entries, setEntries] = useState([])
  const [showModal, setShowModal] = useState(
    {
      display: false,
      message: ""
    }
  )


  function addNewEntry(entry) {
    setEntries(prevEntries => [entry, ...prevEntries])
  }


  return (
    <div id="main-container">

      <Form
        addNewEntry={addNewEntry}
        // if error display, message will be returned and modal state will be updated => re-render
        displayErrorModal={(display, message) => setShowModal(
          { display, message }
        )}
      />

      {entries.length > 0 && <Cards entries={entries} />}
      {/* display results section only if array is not empty */}

      {/* handleClose - reset modal state to dsipay false, no message */}
      <Modal
        handleClose={() => setShowModal({
          display: false,
          message: ""
        })}
        show={showModal.display}
        message={showModal.message}
      />
    </div>
  );
}

export default App;
