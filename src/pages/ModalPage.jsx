import { useEffect, useState } from "react";
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

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Escape') {
        event.preventDefault(); 
        setShowModal(false);
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Quiubo bebe donde estas acabo de aterrizar en Medellin</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={toggleModal} primary>
        Open modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
        malesuada venenatis. Donec dictum nunc id nisl efficitur tincidunt. In
        in nibh tempus erat iaculis dictum id a metus. In eget tincidunt dolor.
        Mauris posuere, quam et porttitor imperdiet, ante est laoreet libero,
        vitae convallis elit libero et ante. Nunc ut massa in felis tempor
        laoreet quis eu lorem. Mauris turpis tellus, condimentum non nisi in,
        varius iaculis nunc. Maecenas interdum scelerisque massa sed facilisis.
        Sed sollicitudin congue tortor, vehicula tempor justo iaculis sed. Morbi
        vehicula ut nibh id feugiat. Nam ornare elit in lorem venenatis porta.
        Fusce nisi nisl, hendrerit sit amet molestie eget, aliquam at justo.
        Quisque eu risus placerat, aliquam risus eget, imperdiet tellus. Nullam
        mattis id nunc sed tempus. Vivamus laoreet, magna non ultrices
        facilisis, tellus libero luctus nibh, ac porttitor enim libero at
        sapien.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
        malesuada venenatis. Donec dictum nunc id nisl efficitur tincidunt. In
        in nibh tempus erat iaculis dictum id a metus. In eget tincidunt dolor.
        Mauris posuere, quam et porttitor imperdiet, ante est laoreet libero,
        vitae convallis elit libero et ante. Nunc ut massa in felis tempor
        laoreet quis eu lorem. Mauris turpis tellus, condimentum non nisi in,
        varius iaculis nunc. Maecenas interdum scelerisque massa sed facilisis.
        Sed sollicitudin congue tortor, vehicula tempor justo iaculis sed. Morbi
        vehicula ut nibh id feugiat. Nam ornare elit in lorem venenatis porta.
        Fusce nisi nisl, hendrerit sit amet molestie eget, aliquam at justo.
        Quisque eu risus placerat, aliquam risus eget, imperdiet tellus. Nullam
        mattis id nunc sed tempus. Vivamus laoreet, magna non ultrices
        facilisis, tellus libero luctus nibh, ac porttitor enim libero at
        sapien.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
        malesuada venenatis. Donec dictum nunc id nisl efficitur tincidunt. In
        in nibh tempus erat iaculis dictum id a metus. In eget tincidunt dolor.
        Mauris posuere, quam et porttitor imperdiet, ante est laoreet libero,
        vitae convallis elit libero et ante. Nunc ut massa in felis tempor
        laoreet quis eu lorem. Mauris turpis tellus, condimentum non nisi in,
        varius iaculis nunc. Maecenas interdum scelerisque massa sed facilisis.
        Sed sollicitudin congue tortor, vehicula tempor justo iaculis sed. Morbi
        vehicula ut nibh id feugiat. Nam ornare elit in lorem venenatis porta.
        Fusce nisi nisl, hendrerit sit amet molestie eget, aliquam at justo.
        Quisque eu risus placerat, aliquam risus eget, imperdiet tellus. Nullam
        mattis id nunc sed tempus. Vivamus laoreet, magna non ultrices
        facilisis, tellus libero luctus nibh, ac porttitor enim libero at
        sapien.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
        malesuada venenatis. Donec dictum nunc id nisl efficitur tincidunt. In
        in nibh tempus erat iaculis dictum id a metus. In eget tincidunt dolor.
        Mauris posuere, quam et porttitor imperdiet, ante est laoreet libero,
        vitae convallis elit libero et ante. Nunc ut massa in felis tempor
        laoreet quis eu lorem. Mauris turpis tellus, condimentum non nisi in,
        varius iaculis nunc. Maecenas interdum scelerisque massa sed facilisis.
        Sed sollicitudin congue tortor, vehicula tempor justo iaculis sed. Morbi
        vehicula ut nibh id feugiat. Nam ornare elit in lorem venenatis porta.
        Fusce nisi nisl, hendrerit sit amet molestie eget, aliquam at justo.
        Quisque eu risus placerat, aliquam risus eget, imperdiet tellus. Nullam
        mattis id nunc sed tempus. Vivamus laoreet, magna non ultrices
        facilisis, tellus libero luctus nibh, ac porttitor enim libero at
        sapien.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
        malesuada venenatis. Donec dictum nunc id nisl efficitur tincidunt. In
        in nibh tempus erat iaculis dictum id a metus. In eget tincidunt dolor.
        Mauris posuere, quam et porttitor imperdiet, ante est laoreet libero,
        vitae convallis elit libero et ante. Nunc ut massa in felis tempor
        laoreet quis eu lorem. Mauris turpis tellus, condimentum non nisi in,
        varius iaculis nunc. Maecenas interdum scelerisque massa sed facilisis.
        Sed sollicitudin congue tortor, vehicula tempor justo iaculis sed. Morbi
        vehicula ut nibh id feugiat. Nam ornare elit in lorem venenatis porta.
        Fusce nisi nisl, hendrerit sit amet molestie eget, aliquam at justo.
        Quisque eu risus placerat, aliquam risus eget, imperdiet tellus. Nullam
        mattis id nunc sed tempus. Vivamus laoreet, magna non ultrices
        facilisis, tellus libero luctus nibh, ac porttitor enim libero at
        sapien.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
        malesuada venenatis. Donec dictum nunc id nisl efficitur tincidunt. In
        in nibh tempus erat iaculis dictum id a metus. In eget tincidunt dolor.
        Mauris posuere, quam et porttitor imperdiet, ante est laoreet libero,
        vitae convallis elit libero et ante. Nunc ut massa in felis tempor
        laoreet quis eu lorem. Mauris turpis tellus, condimentum non nisi in,
        varius iaculis nunc. Maecenas interdum scelerisque massa sed facilisis.
        Sed sollicitudin congue tortor, vehicula tempor justo iaculis sed. Morbi
        vehicula ut nibh id feugiat. Nam ornare elit in lorem venenatis porta.
        Fusce nisi nisl, hendrerit sit amet molestie eget, aliquam at justo.
        Quisque eu risus placerat, aliquam risus eget, imperdiet tellus. Nullam
        mattis id nunc sed tempus. Vivamus laoreet, magna non ultrices
        facilisis, tellus libero luctus nibh, ac porttitor enim libero at
        sapien.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
        malesuada venenatis. Donec dictum nunc id nisl efficitur tincidunt. In
        in nibh tempus erat iaculis dictum id a metus. In eget tincidunt dolor.
        Mauris posuere, quam et porttitor imperdiet, ante est laoreet libero,
        vitae convallis elit libero et ante. Nunc ut massa in felis tempor
        laoreet quis eu lorem. Mauris turpis tellus, condimentum non nisi in,
        varius iaculis nunc. Maecenas interdum scelerisque massa sed facilisis.
        Sed sollicitudin congue tortor, vehicula tempor justo iaculis sed. Morbi
        vehicula ut nibh id feugiat. Nam ornare elit in lorem venenatis porta.
        Fusce nisi nisl, hendrerit sit amet molestie eget, aliquam at justo.
        Quisque eu risus placerat, aliquam risus eget, imperdiet tellus. Nullam
        mattis id nunc sed tempus. Vivamus laoreet, magna non ultrices
        facilisis, tellus libero luctus nibh, ac porttitor enim libero at
        sapien.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
        malesuada venenatis. Donec dictum nunc id nisl efficitur tincidunt. In
        in nibh tempus erat iaculis dictum id a metus. In eget tincidunt dolor.
        Mauris posuere, quam et porttitor imperdiet, ante est laoreet libero,
        vitae convallis elit libero et ante. Nunc ut massa in felis tempor
        laoreet quis eu lorem. Mauris turpis tellus, condimentum non nisi in,
        varius iaculis nunc. Maecenas interdum scelerisque massa sed facilisis.
        Sed sollicitudin congue tortor, vehicula tempor justo iaculis sed. Morbi
        vehicula ut nibh id feugiat. Nam ornare elit in lorem venenatis porta.
        Fusce nisi nisl, hendrerit sit amet molestie eget, aliquam at justo.
        Quisque eu risus placerat, aliquam risus eget, imperdiet tellus. Nullam
        mattis id nunc sed tempus. Vivamus laoreet, magna non ultrices
        facilisis, tellus libero luctus nibh, ac porttitor enim libero at
        sapien.
      </p>
    </div>
  );
}

export default ModalPage;
