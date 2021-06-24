import IconEntradas from '../../assets/income.svg';
import IconSaidas from '../../assets/outcome.svg';
import IconTotal from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

export function Summary() {
  const { 
    getTotalIncomeTransactions, 
    getTotalOutcomeTransactions,
    getTotalValueTransactions
  } = useTransactions();

  return (
    <Container>
      <section>
        <header>
          <p>Entradas</p>
          <img src={IconEntradas} alt="entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(getTotalIncomeTransactions())}
        </strong>
      </section>

      <section>
        <header>
          <p>Saídas</p>
          <img src={IconSaidas} alt="saídas" />
        </header>
        <strong>
          -{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(getTotalOutcomeTransactions())}
        </strong>
      </section>

      <section className="highligth-background">
        <header>
          <p>Total</p>
          <img src={IconTotal} alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(getTotalValueTransactions())}
        </strong>
      </section>
    </Container>
  );
}