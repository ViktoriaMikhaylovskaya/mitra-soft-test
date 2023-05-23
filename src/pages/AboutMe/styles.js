import styled from "styled-components";
import { Accordion as UIAccordion } from 'react-bootstrap';

export const PageWrapper = styled.div`
    margin: 0 auto;
    max-width: 1200px;
`

export const MainInfoContainer = styled.div`
    display: flex;
`

export const AccordionContainer = styled(UIAccordion)`
    margin: 30px 0;
`

export const Avatar = styled.img`
    width: 300px;
    height: 200px;
    border: 1px solid blue;
    margin-right: 20px;
    border-radius: 15px;
`

export const SkillsWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
`

export const SkillsItem = styled.li`
    width: max-content;
    border-radius: 15px;
    padding: 10px 15px;
    background-color: #e7f1ff;
`

export const SocialBlock = styled.div`
    display: flex;
` 

export const Social = styled.p`
    color: #a1a4a6;
    margin: 0;
    margin-right: 5px;
    display: inline-block;
` 

export const Text = styled.p`
    margin 0;
`

export const Description = styled.p`
    font-size: 13px;
`

export const Link = styled.a`
    color: white;
    text-decoration: none;
`