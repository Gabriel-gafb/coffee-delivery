import {
  DetailsSection,
  DetailsIcon,
  IntroContainer,
  IntroDetails,
  IntroSection,
  ProductContainer,
  DetailsRow,
} from "./styles";
import mainPageImage from "../../assets/MainPage-Image.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
export function Home() {
  return (
    <div>
      <IntroContainer>
        <IntroSection>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <IntroDetails>
            <DetailsSection>
              <DetailsRow>
                <DetailsIcon background="yellowDark">
                  <ShoppingCart size={18} color="white" weight="fill" />
                </DetailsIcon>
                <span>Compra simples e segura</span>
              </DetailsRow>

              <DetailsRow>
                <DetailsIcon background="baseGray">
                  <Package size={18} color="white" weight="fill" />
                </DetailsIcon>
                <span>Embalagem mantém o café intacto</span>
              </DetailsRow>
            </DetailsSection>

            <br />

            <DetailsSection>
              <DetailsRow>
                <DetailsIcon background="yellow">
                  <Timer size={18} color="white" weight="fill" />
                </DetailsIcon>
                <span>Entrega rápida e rastreada</span>
              </DetailsRow>

              <DetailsRow>
                <DetailsIcon background="purpleDark">
                  <Coffee size={18} color="white" weight="fill" />
                </DetailsIcon>
                <span>O café chega fresquinho até você</span>
              </DetailsRow>
            </DetailsSection>
          </IntroDetails>
        </IntroSection>
        <img src={mainPageImage} />
      </IntroContainer>
      <ProductContainer>
        <h2> Nossos cafés</h2>
      </ProductContainer>
    </div>
  );
}
