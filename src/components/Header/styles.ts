import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.section`
  width: 100%;
  max-width: 1120px;
  
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--shape);
    background-color: var(--blue-ligth);

    border: 0;
    border-radius: 0.25rem;

    height: 3rem;
    padding: 0 2rem;

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;