import { createPortal } from 'react-dom';

function Modal({onClose}) {
  return createPortal(
    <div>
      <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 p-10 bg-white">Modal bebe</div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
