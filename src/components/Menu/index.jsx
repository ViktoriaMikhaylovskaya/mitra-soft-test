import { Nav, Offcanvas } from 'react-bootstrap';
import { NAVIGATION_LIST, NAME, EMAIL } from './constants';
import { HeaderWrapper, Avatar, HeaderInfo } from './styles';
import myAvatar from '../../images/main-avatar.jpg';

function Menu({isShow, handleClose}) {
  return (
    <Offcanvas show={isShow} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <HeaderWrapper>
                <Avatar src={myAvatar} alt="avatar"/>
                  <HeaderInfo>
                    <h4>{NAME}</h4>
                    <p>{EMAIL}</p>
                </HeaderInfo>
            </HeaderWrapper>
            <Nav className="flex-column">
                {NAVIGATION_LIST.map((el) => (
                    <Nav.Item key={el.link}>
                        <Nav.Link href={el.link} eventKey="main">{el.title}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </Offcanvas.Body>
      </Offcanvas>
  );
}

export default Menu;
