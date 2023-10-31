import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Button onClick={toggleModal} primary>
        Open modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
}

export default ModalPage;
