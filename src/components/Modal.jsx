import styled from "styled-components";
import { Input, Select, Button } from "./common";

const Modal = () => {
  return (
    <StyledModal>
      <StyledModalForm>
        <Input />
        <Select
          items={[
            { id: "1", value: "salud" },
            { id: "2", value: "house" },
            { id: "3", value: "work" },
          ]}
        />
        <Button>Update</Button>
      </StyledModalForm>
    </StyledModal>
  );
};

const StyledModal = styled.dialog`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.darkBlue};

  &::backdrop {
    background: rgb(0, 0, 0, 0.3);
  }
`;

const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

export default Modal;
