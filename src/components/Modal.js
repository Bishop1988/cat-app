import React from "react";
import ReactDOM from "react-dom";
import "../styles/modal.css";

const Modal = ({ isShowing, hide, basketItems, removeItemFromBasket }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h2>Your Basket</h2>
              {basketItems.map((item, i) => {
                  return (
                    <div>
                      <img src={item.image} alt="cat" />

                      <div className="about-me-info">
                        <h3>Name: {item.name}</h3>
                        {/* <h3>Breed: {item.breed}</h3>
                        <h3>Age: {item.age}</h3>
                        <h3>Location: {item.city}</h3>
                        <h3>Sex: {item.gender}</h3> */}
                        <h3>Price: {item.price}</h3>
                        <button onClick={() => removeItemFromBasket(item)}>Remove</button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
