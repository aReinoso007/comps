import { useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ onClose, children, actionBar }) {
    /**
     * It applies when the modal is first rendered  
     */
    useEffect(()=>{
        document.body.classList.add('overflow-hidden')

        //to remove the class when the modal is unmounted, to enable scrolling
        return ()=>{
            document.body.classList.remove('overflow-hidden')
        }
    }, []);

  return createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">
          {actionBar}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
