import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-medium);
  color: var(--color-black);

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
