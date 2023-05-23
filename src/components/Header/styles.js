import styled from "styled-components";
import { Button as UIButton } from 'react-bootstrap';

export const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

export const Title = styled.h2`
    margin: 10px 16px;
`

export const Button = styled(UIButton)`
    width: 160px;
    font-size: 18px;
`