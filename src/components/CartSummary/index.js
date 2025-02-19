// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const renderTotalPrice = () => {
        let totalPrice = 0
        cartList.map(eachItem => {
          totalPrice += eachItem.price * eachItem.quantity
          return totalPrice
        })
        return totalPrice
      }
      return (
        <div className="cart-summary-container">
          <h1 className="total">
            Order Total: <span className="cost">Rs {renderTotalPrice()}/-</span>
          </h1>
          <p className="items-desc">{cartList.length} items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
