import React, { useState, useEffect } from 'react';

import './style.scss';

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleVisibility = (toggle) => {
    setIsOpen(toggle)
    document.body.style.overflow = toggle ? 'hidden' : 'auto';
  }

  const onClose = () => {
    toogleVisibility(false);
    props.onClose();
  }
  
  useEffect(_ => {
    toogleVisibility(props.isOpen);
  }, [props.isOpen])

  return (
    <div id="modal" className="modal" style={{display: isOpen ? 'block' : 'none'}}>
      <div className="modal-content">
        {props.children}
      </div>
      <span className="close" onClick={_ => onClose()}>&times;</span>
    </div>
  )
}

export default Modal;