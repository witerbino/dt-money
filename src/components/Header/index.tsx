import Logo from '../../assets/logo.svg'
import { Container, Content } from './styles';

import { HeaderProps } from './props';

export function Header({ handleOpenModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt.money" />
        <button
          type="button"
          onClick={handleOpenModal}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  );
}