import styled from "styled-components";
import { Dropdown as UIDropdown } from "react-bootstrap";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 1200px;
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

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Sort = styled(UIDropdown)`
    width: max-content;
    margin-right: auto;
`

export const NotFoundMessage = styled.div`
    text-align: center;
`