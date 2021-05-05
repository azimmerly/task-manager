import styled from "@emotion/styled";

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.35rem 0;
  border: none;
  outline: none;
  border-bottom: 2px solid var(--color-primary);
  color: var(--color-black);
  font-size: var(--font-size-medium);
`;

export const EditButtons = styled.div`
  display: flex;
  justify-self: flex-start;
  padding-left: 2rem;
  font-size: var(--font-size-large);
  color: var(--color-grey);
  transform: scale(1.1);

  & > * {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  & > *:last-child {
    &:hover,
    &:focus {
      transform: scale(1.1);
      color: var(--color-red);
    }
  }

  & > *:not(:last-child) {
    margin-right: 0.5rem;
    &:hover,
    &:focus {
      transform: scale(1.1);
      color: var(--color-primary);
    }
  }
`;
