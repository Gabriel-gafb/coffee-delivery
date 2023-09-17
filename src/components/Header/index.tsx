import { HeaderContainer, RightTopHeaderContainer, LeftTopHeaderContainer } from "./styles";
import logoCoffee from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'

export function Header(){
    return(
        <HeaderContainer>
            <NavLink to="/" title="Home">
                    <img src={logoCoffee} alt=""/>
            </NavLink>            
            <nav>
                <LeftTopHeaderContainer>

                </LeftTopHeaderContainer>
                <RightTopHeaderContainer>
                <NavLink to="/checkout" title="Checkout">
                    <ShoppingCart/>
                </NavLink>
                </RightTopHeaderContainer>
            </nav>
        </HeaderContainer>
    )
}