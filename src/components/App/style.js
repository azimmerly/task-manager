import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(32rem, 85vw, 80rem);
  padding: 1rem;
`;

export const Header = styled.header`
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: clamp(2rem, 3vw, 5rem);

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h1`
  font-family: var(--font-secondary);
  font-size: var(--font-size-huge);
  font-weight: 300;
`;

export const Subtitle = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--font-size-large);
  font-weight: 300;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;
