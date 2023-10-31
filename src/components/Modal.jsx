import { createPortal } from 'react-dom';

function Modal() {
  return createPortal(
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 p-10 bg-white">Modal bebe</div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
