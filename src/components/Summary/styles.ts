import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top: -9rem;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  section {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      transform: translateY(-5px);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highligth-background {
      background-color: var(--green);
      color: var(--shape);
    }
  }
`;