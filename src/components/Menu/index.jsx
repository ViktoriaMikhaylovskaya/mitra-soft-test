import { Nav, Offcanvas } from 'react-bootstrap';
import myAvatar from '../../images/main-avatar.jpg';
import { NAV_LINKS, NAME, EMAIL } from './constants';
import { HeaderWrapper, Avatar } from './styles';

function Menu({isShow, handleClose}) {
  return (
    <Offcanvas show={isShow} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <HeaderWrapper>
                <Avatar src={myAvatar} alt="avatar"/>
                <div>
                    <h4>{NAME}</h4>
                    <p>{EMAIL}</p>
                </div>
            </HeaderWrapper>
            <Nav className="flex-column">
                {NAV_LINKS.map((el) => (
                    <Nav.Item key={el.title}>
                        <Nav.Link href={el.link} eventKey="main">{el.title}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </Offcanvas.Body>
      </Offcanvas>
  );
}

export default Menu;
