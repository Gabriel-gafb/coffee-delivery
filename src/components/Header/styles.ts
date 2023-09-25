import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
    nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

   

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }
`

export const RightTopHeaderContainer =styled.div`
align-self: flex-start;
`

export const LeftTopHeaderContainer =styled.div`
  align-self: flex-end;
  justify-self: flex-end;


`