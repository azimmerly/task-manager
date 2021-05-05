import styled from "@emotion/styled";

export const Form = styled.form`
  margin-top: 5rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  font-size: var(--font-size-medium);
  color: var(--color-black);
  box-shadow: var(--shadow-small);
  border: none;
  outline: none;
  border-radius: 10rem;
  padding: 1.8rem 2.6rem;
  margin-right: -4.5rem;
  transition: all 0.2s ease-in-out;

  &:focus,
  &:active {
    box-shadow: var(--shadow-large);
  }

  &::placeholder {
    color: var(--color-grey);
  }
`;

export const AddTaskButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background: none;
  z-index: 10;
  height: 100%;
  cursor: pointer;
  color: var(--color-grey);
  font-size: var(--font-size-large);
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;
  padding-left: 1rem;
  margin-left: -1rem;
  background: var(--color-white);

  &:hover,
  &:focus {
    transform: scale(1.2);
    color: var(--color-primary);
  }
`;
