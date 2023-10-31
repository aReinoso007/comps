import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button onClick={toggleModal} primary>
        Open modal
      </Button>
      {showModal && <Modal onClose={handleClose} />}
    </div>
  );
}

export default ModalPage;
