import { Nav, Offcanvas } from 'react-bootstrap';
import myAvatar from '../../images/main-avatar.jpg';
import { NAV_LINKS } from './constants';

const NAME = 'Виктория';
const EMAIL = 'mviktoria065@gmail.com';

function Menu({isShow, handleClose}) {
  return (
    <Offcanvas show={isShow} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div style={{display: 'flex', border: '1px solid grey', padding: '10px', borderRadius: '15px', marginBottom: '20px'}}>
                <img src={myAvatar} alt="avatar" style={{ width: '150px', height: '100px' }} />
                <div>
                    <h4>{NAME}</h4>
                    <p>{EMAIL}</p>
                </div>
            </div>
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
