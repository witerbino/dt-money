import { useTransactions } from '../../hooks/useTransactions';
import { Utils } from '../../utils/Utils';
import { Container } from './styles';

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const { getTransactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {getTransactions().map((transaction: Transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {Utils.numberFormat(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {Utils.dateFormat(transaction.createdAt)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}