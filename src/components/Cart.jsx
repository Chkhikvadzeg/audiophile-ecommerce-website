import styled from "styled-components"
import Button1 from "../styled-components/Inputs/Buttons/Button1"
import Heading6 from "../styled-components/typography/Headings/Heading6"

export default function Cart({ cartItems, setCartItems }) {

  const total = cartItems.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const decrement = (item) => {
    const newCartItems = [...cartItems].map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })
    setCartItems(newCartItems)
  }

  const increment = (item) => {
    const newCartItems = [...cartItems].map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 }
      }
      return cartItem
    }).filter((cartItem) => cartItem.quantity > 0)
    setCartItems(newCartItems)
  }

  return (
    <CartContainer>
      <CartHeader>
        <Heading6>Cart ({total})</Heading6>
        <button onClick={() => setCartItems([])}>Remove all</button>
      </CartHeader>
      <CartItems>
        {cartItems.map((item) => {
          return (
            <CartItem key={item.id}>
              <Left>
                <Image><img src={process.env.PUBLIC_URL + item.image} alt={item.name} /></Image>
                <div>
                  <h3>{item.name.split(' ')[0]}</h3>
                  <p>$ {item.price}</p>
                </div>
              </Left>
              <Add>
                <button onClick={() => decrement(item)}>+</button>
                <p>{item.quantity}</p>
                <button onClick={() => increment(item)}>-</button>
              </Add>
            </CartItem>
          )
        })}
        <Total>
          <p>Total</p>
          <p>$ {totalPrice},00</p>
        </Total>
        <Checkout>checkout</Checkout>
      </CartItems>
    </CartContainer>
  )
}

const CartContainer = styled.div`
  position: absolute;
  padding: 32px 28px;
  background-color: #FFFFFF;
  border-radius: 8px;
  width: calc(100% - 48px);
  left: 50%;
  transform: translateX(-50%);
  top: calc(100% + 24px);
  z-index: 2;

  @media (min-width: 768px) {
    width: 400px;
    right: 40px;
    left: auto;
    transform: translateX(0);
  }

  @media (min-width: 1024px) {
    right: 165px;
  }

`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    text-decoration: underline;
    transition: all .3s ease-in-out;
    color: rgba(0, 0, 0, 0.5);
    
    &:hover {
      color: #D87D4A;
    }
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

const Left = styled.div`
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

const Add = styled.div`
  background: #F1F1F1;
  width: 96px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;

  button {
    cursor: pointer;
    background: none;
    border: none;
    width: 16px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease-in-out;
    user-select: none;

    &:hover {
      color: #D87D4A;
    }
  }

  p {
    color: #000000;
    font-weight: 700;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  p:last-child {
    font-weight: 700;
    color: #000000;
  }
`;

const Checkout = styled(Button1)`
  width: 100%;
`