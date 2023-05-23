import styled from "styled-components";
import { Spinner as UISpinner } from "react-bootstrap";

export const PageWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const Spinner = styled(UISpinner)`
    display: flex;
    margin: 0 auto;
`