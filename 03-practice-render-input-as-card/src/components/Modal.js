import React from "react"
import './Modal.css'


const Modal = ({ handleClose, show, message }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal-main--header">Invalid input</div>
                <div className="modal-main--message--and--btn">
                    <p>{message}</p>
                    <button type="button" onClick={handleClose}>
                        Okay
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Modal