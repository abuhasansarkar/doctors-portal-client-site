import React from "react";

const ConfirmedModal = ({title, dis, cencelModal, procedAction, modalData }) => {
    //  console.log('delete actiond', modalData);
  return (
    <div>
      <input type="checkbox" id="confirmed-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {title}
          </h3>
          <p className="py-4">
            {dis}
          </p>
          <div className="modal-action">
            <label onClick={cencelModal} className="btn btn-error">
              Cencel
            </label>
            <label onClick={()=>procedAction(modalData)} htmlFor="confirmed-modal" className="btn btn-success">
            proceed  
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedModal;
