import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;
    
    --blue-ligth: #6933FF;
    
    --text-title: #363F5F;
    --text-body: #969CB3;
    
    --background: #F0F2F5;
    --shape: #FFFFFF;

    --input-border: #d7d7d7;
    --input-background: #e7e9ee;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {  
    width: 100%;
    max-width: 575px;

    background-color: var(--background);

    padding: 3rem;
    position: relative;

    border-radius: 0.24rem;
  }

  .modal-close {
    border: 0;
    background: transparent;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;