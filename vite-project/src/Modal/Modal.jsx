import React, { useState } from 'react';

const Modal = ({ settoggledd, id, Item, setstore, Store }) => {
  const [Update, setUpdate] = useState(Item);
  const [Delete, setdelete] = useState('')

  const update_Task = () => {
    const updatedStore = Store.map((item) => {
      if (item.id === id) {
        return { ...item, itemName: Update };
      }
      return item;
    });
    setstore(updatedStore);
    settoggledd(false);
  };


  const delete_func = () => {
    const updatedStore = Store.filter((item) => item.id !== id);
    setstore(updatedStore);
    settoggledd(false);
  };
  

  return (
    <div className="modal-container">
      <div className="modal">
        <input
          type="text"
          placeholder="Write here"
          className="modal-input"
          value={Update}
          onChange={(e) => setUpdate(e.target.value)}
        />
        <div className="button-container">
          <input type="checkbox" className="modal-checkbox" />
          <button className="modal-button update-button" onClick={update_Task}>Update</button>
          <button className="modal-button delete-button" onClick={delete_func} >Delete</button>
          <button onClick={() => settoggledd(false)} className="modal-button cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
