import styled from "@emotion/styled";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
  box-shadow: var(--shadow-small);
  border-radius: 1.5rem;
  padding: 2.5rem;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: var(--shadow-large);
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;

  @media (max-width: 37.5em) {
    width: 60%;
  }

  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) =>
    completed ? "var(--color-grey)" : "var(--color-black"};
`;

export const TaskText = styled.p`
  word-wrap: break-word;
  max-width: 100%;
  cursor: pointer;
`;

export const Checkbox = styled.div`
  display: flex;
  font-size: calc(1.2 * var(--font-size-large));
  margin-right: 1rem;
  cursor: pointer;
  color: var(--color-grey);
  transition: all 0.2s ease-out;

  &:hover,
  &:focus {
    color: var(--color-green);
  }
`;

export const TaskButtons = styled.div`
  display: flex;
  font-size: var(--font-size-large);
  color: var(--color-grey);

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
