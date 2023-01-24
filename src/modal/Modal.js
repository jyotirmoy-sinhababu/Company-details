import ReactDOM from 'react-dom';
import React from 'react';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <div>{children}</div>,
    document.getElementById('portal')
  );
};

export default Modal;
