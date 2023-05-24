import styled from "styled-components";
import { Card, Button as UIButton } from 'react-bootstrap';

export const CardWrapper = styled(Card)`
    width: auto;
    margin-bottom: 30px;    
`

export const CardImage = styled(Card.Img)`
    width: 40px;
    margin-right: 10px;
    cursor: pointer; 
`

export const Button = styled(UIButton)`
    margin-bottom: 10px;
`

export const CommentsContainer = styled.div`
    padding: 10px;
    border: 1px solid grey;
    border-radius: 15px;
`

export const Comment = styled.div`
`