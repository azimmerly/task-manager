import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
  box-shadow: var(--shadow-small);
  border-radius: 1.5rem;
  padding: 2.5rem;
  transition: all 0.2s ease-out;
`;

export const Text = styled.h2`
  color: var(--color-black);
  font-size: calc(1.2 * var(--font-size-medium));
  font-weight: 300;
  margin-top: 2rem;
  margin-bottom: 3rem;
  text-align: center;
`;

export const Img = styled.img`
  width: clamp(20rem, 20vw, 30rem);
  margin-bottom: 2rem;
`;
