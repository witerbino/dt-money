import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import IconClose from '../../assets/close.svg';
import IconIncome from '../../assets/income.svg';
import IconOutcome from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { TransactionModalProps } from './props';
import { 
  Container, 
  TransactionTypeContainer, 
  TransactionTypeButton 
} from './styles';

export function TransactionModal({ 
  isOpenModal, 
  onRequestClose 
}: TransactionModalProps) {

  const { addTransaction } = useTransactions();

  const [title, setTitle] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [type, setType] = useState<string>('income');

  async function handleSubmitForm(event: FormEvent): Promise<void> {
    event.preventDefault();

    if (title.trim() !== '' && amount !== 0 && category.trim() !== '') {
      await addTransaction({
        title,
        amount,
        category,
        type
      });
      clearForm();
    } else {
      alert('Todos os dados devem ser preenchidos!');
    }
  }

  function clearForm(): void {
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('income');
    onRequestClose();
  }

  return (
    <Modal 
      isOpen={isOpenModal}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="modal-close"
      >
        <img src={IconClose} alt="Fechar" />
      </button>
       
      <Container onSubmit={handleSubmitForm}>
        <h2>Cadastrar Transação</h2>

        <input 
          type="text" 
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          type="number" 
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <TransactionTypeButton
            type="button" 
            activeColor="green"
            isActive={type === 'income'}
            onClick={() => setType('income')}
          >
            <img src={IconIncome} alt="Entrada" />
            <span>Entrada</span>
          </TransactionTypeButton>

          <TransactionTypeButton
            type="button"
            activeColor="red"
            isActive={type === 'outcome'}
            onClick={() => setType('outcome')}
          >
            <img src={IconOutcome} alt="Saída" />
            <span>Saída</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>

        <input 
          type="text" 
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}