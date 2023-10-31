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

  const actionBar = <div>
    <Button primary>I accept</Button>
  </div>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>Quiubo bebe donde estas acabo de aterrizar en Medellin</p>
  </Modal>;

  return (
    <div>
      <Button onClick={toggleModal} primary>
        Open modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
