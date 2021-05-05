import styled from "@emotion/styled";

export const CountSection = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 0.8px;
  align-items: flex-end;
  margin-top: 2rem;
  margin-bottom: 8rem;
  margin-right: 1.5rem;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const CountText = styled.p`
  font-family: var(--font-primary);
  font-size: var(--font-size-medium);
  color: var(--color-white);

  span {
    font-size: var(--font-size-large);
  }
`;
