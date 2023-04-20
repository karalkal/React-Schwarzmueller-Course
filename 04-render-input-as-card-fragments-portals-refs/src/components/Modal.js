import React from "react"
import './Modal.css'


const Modal = ({ hideModal, errorModal }) => {

    console.log(errorModal)
    const showHideClassName = errorModal.display ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal-main--header">Invalid input</div>
                <div className="modal-main--message--and--btn">
                    <p>{errorModal.message}</p>
                    <button type="button" onClick={hideModal}>
                        Okay
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Modal