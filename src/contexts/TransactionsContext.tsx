import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

type TransactionsContextType = {
  children: ReactNode
}

type TransactionsContextData = {
  addTransaction: (data: Transaction) => Promise<void>;
  getTransactions: () => Transaction[];
  getTotalIncomeTransactions: () => number;
  getTotalOutcomeTransactions: () => number;
  getTotalValueTransactions: () => number;
}

type Transaction = {
  id?: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt?: string;
}

export const TransactionsContext = createContext(
  {} as TransactionsContextData
);

export function TransactionsProvider({ 
  children 
}: TransactionsContextType) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    loadTransactions();
  }, []);

  async function loadTransactions(): Promise<void> {
    const { data } = await api.get('/transactions');
    setTransactions(data.transactions);
  }

  async function addTransaction(data: Transaction): Promise<void> {
    const response = await api.post('/transactions', data);
    setTransactions([...transactions, response.data.transaction]);
  }

  function getTransactions(): Transaction[] {
    return transactions;
  }

  function getTotalIncomeTransactions(): number {
    return transactions.reduce((acc, transaction) => {
      if (transaction.type === 'income') {
        return acc + transaction.amount;
      }
      return acc;
    }, 0);
  }

  function getTotalOutcomeTransactions(): number {
    return transactions.reduce((acc, transaction) => {
      if (transaction.type === 'outcome') {
        return acc + transaction.amount;
      }
      return acc;
    }, 0);
  }

  function getTotalValueTransactions(): number {
    return getTotalIncomeTransactions() - getTotalOutcomeTransactions();
  }
  
  return (
    <TransactionsContext.Provider 
      value={{ 
        addTransaction, 
        getTransactions,
        getTotalIncomeTransactions,
        getTotalOutcomeTransactions,
        getTotalValueTransactions
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}