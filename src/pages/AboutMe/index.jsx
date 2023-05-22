import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import myAvatar from '../../images/main-avatar.jpg';
import { SKILLS } from "./constants";

function AboutMe() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showMenuHandler = () => setIsShowMenu(!isShowMenu);

  return (
    <>
      <div>
        <Header onClick={showMenuHandler} title='About Me' buttonText='Menu' />
        <Menu isShow={isShowMenu} handleClose={showMenuHandler} />
      </div>

      <div style={{display: 'flex'}}>
        <img src={myAvatar} alt="my avatar" width='300px' height='200px' />
        <div>
          <h2>Михайловская Виктория</h2>
          <p>Frontend Developer</p>
          <p>22 года (20.07.200)</p>
          <p>Telegram: @mikhaylovskayaV</p>
          <p>Email: mviktoria065@gmail.com</p>
        </div>
      </div>

      <div>
        <h4>Навыки</h4>
        <ListGroup style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap'}}>
          {SKILLS.map((el) => (
            <ListGroup.Item variant="primary" style={{width: 'max-content', borderRadius: '15px'}}>{el}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}

export default AboutMe;
