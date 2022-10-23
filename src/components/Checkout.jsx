import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import TextInput from '../styled-components/Inputs/TextInput'
import SubTitle from '../styled-components/typography/SubHeadings/SubHeading'
import RadioInput from '../styled-components/Inputs/RadioInput'
import { useEffect, useState } from 'react'
import Heading6 from '../styled-components/typography/Headings/Heading6'
import Button1 from '../styled-components/Inputs/Buttons/Button1'
import { useForm } from "react-hook-form";
import resolver from './YupSchema'
import SubmittedModal from './SubmittedModal'

export default function Checkout(
  { isMenuOpen,
    setIsMenuOpen,
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    setIsConfirmationOpen,
  }) {
  const navigate = useNavigate()
  const [timer, setTimer] = useState(10)

  useEffect(() => {
    if (cartItems.length === 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1)
      }, 1000)
      if (timer === 0) {
        navigate('/')
      }
      return () => clearInterval(interval)
    }
  }, [timer, cartItems, navigate])

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver });
  const [isEMoney, setIsEMoney] = useState(false)
  const [submitted, setSubmitted] = useState(false);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const onSubmit = () => {
    setSubmitted(true)
    setIsConfirmationOpen(true)
  };

  const onError = () => {
    setSubmitted(false)
    setIsConfirmationOpen(false)
  };

  if (cartItems.length === 0) {
    return (
      <EmptyCart>
        <h1>Your cart is empty</h1>
        <Link to='/'>Go back</Link>
        <span>Redirecting in {timer} seconds</span>
      </EmptyCart>
    )
  }

  return (
    <Wrapper>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      <CheckoutContainer>
        <StyledLink to="/">Go Back</StyledLink>
        <Content onSubmit={handleSubmit(onSubmit, onError)}>
          <Left>
            <InputGroup>
              <SubTitle textColor="#D87D4A">billing details</SubTitle>
              <Inputs>
                <TextInput register={register} errors={errors} label="Name" placeholder="Alexei Ward" id="name" type="text" />
                <TextInput register={register} errors={errors} label="Email" placeholder="alexei@mail.com" id="email" type="email" />
                <TextInput register={register} errors={errors} label="Phone Number" placeholder="+1 202-555-0136" id="phone" type="tel" />
              </Inputs>
            </InputGroup>
            <InputGroup>
              <SubTitle textColor="#D87D4A">shipping info</SubTitle>
              <Inputs>
                <TextInput register={register} errors={errors} label="address" placeholder="Your Address" id="address" type="text" />
                <TextInput register={register} errors={errors} label="ZIP Code" placeholder="ZIP Code" id="zip" type="number" />
                <TextInput register={register} errors={errors} label="City" placeholder="New York" id="city" type="text" />
                <TextInput register={register} errors={errors} label="Country" placeholder="United States" id="country" type="text" />
              </Inputs>
            </InputGroup>
            <InputGroup>
              <SubTitle textColor="#D87D4A">payment details</SubTitle>
              <>
                <RadioInputsCont>
                  <span>Payment Method</span>
                  <RadioInputs>
                    <RadioInput register={register} onClick={() => setIsEMoney(true)} label="e-Money" id="e-Money" name="payment" />
                    <RadioInput checked register={register} onClick={() => setIsEMoney(false)} label="Cash on Delivery" id="cash" name="payment" />
                  </RadioInputs>
                </RadioInputsCont>
                {isEMoney &&
                  <Inputs>
                    <TextInput register={register} errors={errors} required={isEMoney} label="e-Money Number" placeholder="e-Money Number" id="e-money-number" type="number" />
                    <TextInput register={register} errors={errors} required={isEMoney} label="e-Money PIN" placeholder="e-Money PIN" id="e-money-pin" type="number" />
                  </Inputs>
                }
              </>
            </InputGroup>
          </Left>
          <Right>
            <Heading6>Summary</Heading6>
            <CartItems>
              {cartItems.map((item) => {
                return (
                  <CartItem key={item.id}>
                    <LeftCart>
                      <Image><img src={process.env.PUBLIC_URL + item.image} alt={item.name} /></Image>
                      <div>
                        <h3>{item.name.split(' ')[0]}</h3>
                        <p>$ {item.price}</p>
                      </div>
                    </LeftCart>
                    <p>x {item.quantity}</p>
                  </CartItem>
                )
              })}
            </CartItems>
            <PriceItems>
              <PriceItem>
                <span>total</span>
                <span>$ {totalPrice}</span>
              </PriceItem>
              <PriceItem>
                <span>shipping</span>
                <span>$ {totalPrice * 1 / 100}</span>
              </PriceItem>
              <PriceItem>
                <span>VAT (INCLUDED)</span>
                <span>$ {totalPrice * 20 / 100}</span>
              </PriceItem>
            </PriceItems>
            <TotalPrice>
              <span>GRAND TOTAL</span>
              <span>$ {totalPrice + totalPrice * 1 / 100 + totalPrice * 20 / 100}</span>
            </TotalPrice>
            <Button>CONTINUE & PAY</Button>
          </Right>
        </Content>
        {submitted && <SubmittedModal setCartItems={setCartItems} cartItems={cartItems} totalPrice={totalPrice} setIsConfirmationOpen={setIsConfirmationOpen} />}
      </CheckoutContainer>
      <Footer />

    </Wrapper >
  )
}

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  a {
    color: #D87D4A;
    text-decoration: none;
    font-size: 1.5rem;
  }
`;

const Wrapper = styled.div`
  background-color: #FAFAFA;
`;

const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 24px;
  margin: 16px auto 97px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1024px) {
    padding: 0 165px;
    margin: 90px auto 140px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  transition: all .3s ease-in-out;

  &:hover {
    color: #D87D4A;
  }
`;

const Content = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap:32px;
  align-items: flex-start;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`

const Left = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const Right = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 16px;
    column-gap: 24px;
  }
`;

const RadioInputsCont = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    grid-template-columns: 1fr 1fr;
  }  
`;

const RadioInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.2px;
    color: #000000;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CartItems = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`

const LeftCart = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  h3 {
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
  }
`

const Image = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  background: #F1F1F1;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 40px;
    height: 40px;
  }
`

const PriceItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  font-size: 18px;
  line-height: 25px;

  span {
    text-transform: uppercase;
    white-space: nowrap;
  }

  span:last-child {
    color: #000000;
    font-weight: 700;
  }
`;

const TotalPrice = styled(PriceItem)`
  margin: 24px 0;

  span:last-child {
    color: #D87D4A;
  }
`

const Button = styled(Button1)`
  width: 100%;
`;