import { HeaderWrapper, Title, Button } from './styles';

function Header({ onClick, title, buttonText }) {
  return (
    <HeaderWrapper>
        <Title>{title}</Title>
        <Button variant="primary" onClick={onClick}>
          {buttonText}
        </Button>
    </HeaderWrapper>
  );
}

export default Header;
