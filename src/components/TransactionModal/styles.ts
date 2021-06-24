import styled from 'styled-components';

type TransactionTypeButtonProps = {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--input-border);
    background-color: var(--input-background);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    } 

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;
    margin-top: 1.5rem;

    color: var(--shape);
    background-color: var(--green);

    border: 0;
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 600;

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.section`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);

  margin: 1rem 0; 
`;

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  height: 4rem;
  border: 1px solid var(--input-border);
  border-radius: 0.25rem;
  background: ${(props) => props.isActive 
    ? colors[props.activeColor]
    : 'transparent'
  };

  img {
    width: 20px;
    height: 20px
  }

  span {
    font-size: 1rem;
    color: var(--text-title);
  }
`;