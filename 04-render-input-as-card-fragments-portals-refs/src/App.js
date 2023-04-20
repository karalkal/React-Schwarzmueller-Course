import { useState } from 'react';
import Form from './components/Form'
import Cards from './components/Cards'
import Modal from './components/Modal';
import "./App.css"


function App() {
  const [entries, setEntries] = useState([])
  const [errorModal, setErrorModal] = useState({
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

        onError={(message) => setErrorModal(
          { display: true, message }
        )}
      />

      {/* display results section only if array is not empty */}
      {entries.length > 0 && <Cards entries={entries} />}

      {/* handleClose - reset modal state to dislpay false, no message */}
      <Modal
        hideModal={() => setErrorModal({
          display: false,
          message: ""
        })}
        errorModal={errorModal}
      />
    </div>
  );
}

export default App;
