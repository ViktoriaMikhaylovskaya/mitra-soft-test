import { Button } from 'react-bootstrap';

function Header({ onClick, title, buttonText }) {
  return (
    <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
        <h2 style={{margin: '10px 16px'}}>{title}</h2>
        <Button style={{width: '160px', fontSize: '18px'}} variant="primary" onClick={onClick}>
          {buttonText}
        </Button>
    </div>
  );
}

export default Header;
