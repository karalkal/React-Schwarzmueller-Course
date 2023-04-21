import React from "react"
import './Modal.css'


const Modal = ({ hideModal, error }) => {

    const showHideClassName = error.display ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal-main--header">Invalid input</div>
                <div className="modal-main--message--and--btn">
                    <p>{error.message}</p>
                    <button type="button" onClick={hideModal}>Okay</button>
                </div>
            </section>
        </div>
    );
};

export default Modal