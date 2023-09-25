import styled from "styled-components"

export const IntroContainer = styled.div`
height: 34rem;
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 4rem;

img{
    height: 22.5rem;
    margin-right: 2rem;
}
`
export const IntroSection = styled.div`
width: 50%;

h1{
    font-family: "Baloo 2", sans-serif;
    font-size: 48px;
}

span{
    font-family: "Roboto", sans-serif;
    font-size: 20px;
}
`
const INTRO_DETAILS_COLORS = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    baseGray: 'base-title',
    purpleDark: 'purple-dark',
  } as const
  
  interface IntroDetailsProps {
    background: keyof typeof INTRO_DETAILS_COLORS
  }

export const IntroDetails = styled.div`
font-family: "Roboto", sans-serif;
font-size: 10px;
margin: 4rem 0;
margin-right: 0.2rem;

`

export const DetailsSection = styled.section`
display: flex;
`

export const DetailsRow = styled.div`
width: 22.5rem;
display: flex;
align-items: center;
`

export const DetailsIcon = styled.span<IntroDetailsProps>`
border-radius: 20px;
margin-right: 0.5rem;
padding-left:8px;
padding-right:8px;
padding-top: 4px;
padding-bottom: 4px;

background-color: ${(props) => props.theme[INTRO_DETAILS_COLORS[props.background]]}
`

export const ProductContainer = styled.div`
background-color: red;
`
