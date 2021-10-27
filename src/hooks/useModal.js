import { useRef } from "react";

export const useModal = () => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
  };

  const closeModal = () => {
    // modalRef.current.closeMd();
  };

  return [openModal, closeModal, modalRef];
};
