import React, { useState } from 'react';
import "./App.css";
import Modal from './Modal/Modal';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [Text, settext] = useState('');
  const [Store, setstore] = useState([]);
  const [Toggledd, settoggledd] = useState(false);
  const [id, setId] = useState('');
  const [Item, setItem] = useState('');

  const add_Handler = (e) => {
    e.preventDefault();
    let obj = { id: uuidv4(), itemName: Text };
    setstore((prev) => [...prev, obj]);
    settext('');
  };

  const modal_Function = (id) => {
    let edit_btn = Store.find((val) => val.id === id);
    setId(edit_btn.id);
    setItem(edit_btn.itemName);
    settoggledd(true);
  };

 const clear_All = () => {
  setstore([])
 }

  return (
    <div className='wrapper'>
      <div className='placeholder'>
        <input type="text" className='write' placeholder='Write here' value={Text} onChange={(e) => settext(e.target.value)} />
        <button className='add-button' onClick={add_Handler}>Add</button>
        <button className='modal-button delete-button' onClick={clear_All}  >Delete All</button>
      </div>
      <div className='mapping'>
        {
          Store.map((mapping) => {
            return (
              <div key={mapping.id} className='item'>
                <p className='item-text' style={{ textDecoration: mapping.completed ? 'line-through' : 'none' }} >{mapping.itemName}</p>
                <button className='edit-button' onClick={() => modal_Function(mapping.id)}>Edit</button>
              </div>
            );
          })
        }
      </div>
      <div>
        {
          Toggledd && <Modal settoggledd={settoggledd} setstore={setstore} id={id} Item={Item} Store={Store} />
        }
      </div>
    </div>
  );
};

export default App;
