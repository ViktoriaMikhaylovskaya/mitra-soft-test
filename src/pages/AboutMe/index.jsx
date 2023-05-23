import { useState } from "react";
import { Accordion, Badge } from 'react-bootstrap';
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import myAvatar from '../../images/main-avatar.jpg';
import { PROJECTS, SKILLS } from "./constants";
import {
  PageWrapper,
  MainInfoContainer,
  AccordionContainer,
  Avatar,
  SkillsWrapper,
  SkillsItem,
  SocialBlock,
  Social,
  Text,
  Link,
  Description
} from './styles';

function AboutMe() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showMenuHandler = () => setIsShowMenu(!isShowMenu);

  return (
    <PageWrapper>
      <div>
        <Header onClick={showMenuHandler} title='About Me' buttonText='Menu' />
        <Menu isShow={isShowMenu} handleClose={showMenuHandler} />
      </div>

      <MainInfoContainer>
        <Avatar src={myAvatar} alt="my avatar"/>
        <div>
          <h2>Михайловская Виктория <Badge bg="success">Frontend Developer</Badge></h2>
          
          <p>22 года (20.07.200)</p>

          <SocialBlock>
            <Social>Telegram:</Social>
            <Text>@mikhaylovskayaV</Text>
          </SocialBlock>

          <SocialBlock>
            <Social>Email:</Social>
            <Text>mviktoria065@gmail.com</Text>
          </SocialBlock>

          <SocialBlock>
            <Social>GitHub:</Social>
            <Text>https://github.com/ViktoriaMikhaylovskaya</Text>
          </SocialBlock>
        </div>
      </MainInfoContainer>

      <AccordionContainer>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Обучение</Accordion.Header>
          <Accordion.Body>
            <div>
              <p>Во фронтенде развиваюсь более 2х лет. Из них 1,5 года проходила курсы в HTMLAcademy.</p>
              <p>Коротко о имеющихся и законченных проектах, выполненных в период обучения в Академии:</p>
              
              <ol>
                {PROJECTS.map((el) => (
                  <li key={el.link}>
                    <span>{el.title} </span>
                    <Badge bg="info">
                      <Link href={el.link} target="blank">GitHub</Link>
                    </Badge>
                    <Description><em>{el.description}</em></Description>
                  </li>
                ))}
              </ol>

              <div>
                <span>Так же есть самостоятельно выполненные тестовые задания. Могут быть интересны:</span>
                <ul>
                  <li>
                    <span>TODO-list </span>
                    <Badge bg="primary">
                      <Link href='https://github.com/ViktoriaMikhaylovskaya/woman-up-test' target="blank">GitHub</Link>
                    </Badge> {' '}
                    <Badge bg="primary">
                      <Link href='https://viktoriamikhaylovskaya.github.io/woman-up-test/' target="blank">Развернутый сайт</Link>
                    </Badge>
                  </li>
                  <li>
                    <span>Сайт для поиска книг, который можно запустить через Docker. </span>
                    <Badge bg="primary">
                      <Link href='https://github.com/ViktoriaMikhaylovskaya/feature-test' target="blank">GitHub</Link>
                    </Badge>
                  </li>
                </ul>
                <p>Остальное можно посмотреть в моём <a href="https://github.com/ViktoriaMikhaylovskaya" target="blank"> GitHub профиле</a>.</p>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Коммерческий опыт</Accordion.Header>
          <Accordion.Body>
            <SkillsWrapper>
              <div>
                <p>С января по настоящий момент работаю в ВТБ на проекте "Залоги". По правде говоря, работаю не официально, но коммерческий опыт получаю в полном объеме!
                    Из того, что я делала можно выделить следующее:
                </p>
                <ol>
                  <li>Реализовывала новые страницы с нуля;</li>
                  <li>Создавала переиспользуемые компоненты;</li>
                  <li>Добавляла ограничение доступа к странице по url по ролям и привелегиям;</li>
                  <li>Переписывала компоненты со старого UIKit на новый;</li>
                  <li>Fix багов;</li>
                  <li>Разбивала задачи в Jira;</li>
                  <li>Выполняла всю работу по системным требованиям и бизнес требованиям;</li>
                  <li>Конечно же общалась с аналитиками, бэками, дизайнером и другими.</li>
                </ol>
                <br/>
                <p>В ВТБ стэк: React, Redux, TypeScript, style-components.</p>
              </div>
            </SkillsWrapper>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Навыки</Accordion.Header>
          <Accordion.Body>
            <SkillsWrapper>
              {SKILLS.map((el) => (
                <SkillsItem key={el} variant="primary">{el}</SkillsItem>
              ))}
            </SkillsWrapper>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Планы</Accordion.Header>
          <Accordion.Body>
            <p>После того, как я подтяну знания по всем инструментам на новой работе, в планах:</p>
            <ul>
              <li>Глубже разобраться в SSR, изучить Next;</li>
              <li>Глубже разобраться со сборками проекта (webpak, gulp);</li>
              <li>изучить React Native;</li>
              <li>Глубже изучить Jest;</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </AccordionContainer>
    </PageWrapper>
  );
}

export default AboutMe;
