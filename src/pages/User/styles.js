import styled from "styled-components";
import { Spinner as UISpinner, Dropdown as UIDropdown } from "react-bootstrap";

export const PageWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const Spinner = styled(UISpinner)`
    display: flex;
    margin: 0 auto;
`

export const SearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    margin-bottom: 20px;
`

export const Search = styled.div`
    display: flex;
    gap: 10px;
`

export const SearchInput = styled.input`
    min-width: 200px;
    width: 100%;
    padding: 10px;
`

export const Sort = styled(UIDropdown)`
    width: max-content;
    margin-right: auto;
`

export const NotFoundMessage = styled.div`
    text-align: center;
`