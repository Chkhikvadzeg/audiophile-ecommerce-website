import styled from "styled-components"
import { Link } from "react-router-dom"
import Confirmed from "../assets/icon-order-confirmation.svg"
import Heading5 from "../styled-components/typography/Headings/Heading5"
import Button1 from "../styled-components/Inputs/Buttons/Button1"
import { useState } from "react"

export default function SubmittedModal({ cartItems, totalPrice, setIsConfirmationOpen, setCartItems }) {
  const [showOther, setShowOther] = useState(false)
  return (
    <Container>
      <ConfirmationImage src={Confirmed} alt="confirmed" />
      <Heading5>THANK YOU FOR YOUR ORDER</Heading5>
      <p>You will receive an email confirmation shortly.</p>
      <Wrap>
        <Summary>
          <Orders>
            <Top>
              <TopLeft>
                <Image>
                  <img src={process.env.PUBLIC_URL + cartItems[0].image} alt="product" />
                </Image>
                <div>
                  <h3>{cartItems[0].name.split(" ")[0]}</h3>
                  <p>$ {cartItems[0].price}</p>
                </div>
              </TopLeft>
              <p>x {cartItems[0].quantity}</p>
            </Top>
            {showOther &&
              <>
                {cartItems.map((item, index) => {
                  return (
                    index !== 0 && (
                      <Top key={item.id}>
                        <TopLeft>
                          <Image>
                            <img src={process.env.PUBLIC_URL + item.image} alt="product" />
                          </Image>
                          <div>
                            <h3>{item.name.split(" ")[0]}</h3>
                            <p>$ {item.price}</p>
                          </div>
                        </TopLeft>
                        <p>x {item.quantity}</p>
                      </Top>
                    )
                  )
                })}
              </>
            }
            <Br />
            {!showOther ? (

              <Bottom onClick={() => setShowOther(true)}>
                and {cartItems.length - 1} other item(s)
              </Bottom>
            ) : (
              <Bottom onClick={() => setShowOther(false)}>
                View less
              </Bottom>
            )
            }

          </Orders>
        </Summary>
        <Total>
          <p>GRAND TOTAL</p>
          <p>$ {totalPrice + totalPrice * 1 / 100 + totalPrice * 20 / 100}</p>
        </Total>
      </Wrap>
      <Link onClick={() => {
        setCartItems([])
        setIsConfirmationOpen(false)
      }} to="/"><Button>BACK TO HOME</Button></Link>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #FFFFFF;
  padding: 32px;
  z-index: 2;
  border-radius: 8px;
  width: calc(100% - 48px);

  @media (min-width: 768px) {
    width: 540px;
    padding: 48px;
    gap: 32px;
  }
`;

const ConfirmationImage = styled.img`
  width: 64px;
  height: 64px;
`;

const Wrap = styled.div`

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Summary = styled.div`
  border-radius: 8px 8px 0 0;
  background-color: #F1F1F1;
  padding: 24px;

  @media (min-width: 768px) {
    border-radius: 8px 0 0 8px;
  }
`;

const Orders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 8px 8px 0 0;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TopLeft = styled.div`
  display: flex;
  gap: 16px;

  h3 {
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    font-weight: 700;
  }

  p {
    font-weight: 700;
    font-size: 14px;
  }
`;

const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: #F1F1F1;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 28px;
    height: 32px;
  }
`;

const Br = styled.br`
  content: "";
  display: block;
  background: #000000;
  mix-blend-mode: normal;
  opacity: 0.08;
  width: 100%;
  height: 1px;
`;

const Bottom = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.2px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #000000;
  }
`;

const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
  border-radius: 0 0 8px 8px;
  background-color: #000000;
  padding: 15px 24px 20px;

  p:first-child {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
  }

  p:last-child {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  @media (min-width: 768px) {
    border-radius: 0 8px 8px 0;
  }
`;

const Button = styled(Button1)`
  width: 100%;
`