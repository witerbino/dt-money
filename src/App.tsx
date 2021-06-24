import { useState, ReactElement } from 'react';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { TransactionModal } from './components/TransactionModal';
import { TransactionsProvider } from './contexts/TransactionsContext';

Modal.setAppElement('#root');

export function App(): ReactElement {
  const [
    isNewTransactionModalOpen, 
    setIsNewTransactionModalOpen
  ] = useState<boolean>(false);

  function handleToggleModalTransaction(): void {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }
  return (
    <TransactionsProvider>
      <Header 
        handleOpenModal={handleToggleModalTransaction}
      />
      <Dashboard />
      <TransactionModal
        isOpenModal={isNewTransactionModalOpen}
        onRequestClose={handleToggleModalTransaction}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
