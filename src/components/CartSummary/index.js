// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import CartContext from '../../context/CartContext'
import './index.css'

class CartSummary extends Component {
  state = {paymentMethod: '', successMessage: ''}

  onCheckout = () => {
    this.setState({successMessage: 'Your order has been placed successfully'})
  }

  handlePaymentMethods = event => {
    this.setState({paymentMethod: event.target.value})
  }

  render() {
    const {paymentMethod, successMessage} = this.state
    console.log(paymentMethod)
    return (
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
          const btnClass =
            paymentMethod === 'Cash on Delivery'
              ? 'pop-btn-active'
              : 'pop-btn-active pop-btn-inactive'

          return (
            <div className="cart-summary-container">
              <h1 className="total">
                Order Total:{' '}
                <span className="cost">Rs {renderTotalPrice()}/-</span>
              </h1>
              <p className="items-desc">{cartList.length} items in cart</p>
              <Popup
                modal
                trigger={
                  <button type="button" className="checkout-btn">
                    Checkout
                  </button>
                }
              >
                {close => (
                  <div className="payment-popup">
                    <h1 className="orders-header">Order Confirmation</h1>
                    <h2>Order Summary</h2>
                    <p>No.of Items: {cartList.length}</p>
                    <p>Total Price: {renderTotalPrice()}/-</p>
                    <h2>Payment Options</h2>
                    <div className="pay-options">
                      <input
                        type="radio"
                        id="card"
                        name="payment"
                        value="Card"
                        onChange={this.handlePaymentMethods}
                        disabled
                      />
                      <label htmlFor="card">Card</label>

                      <input
                        type="radio"
                        id="net"
                        name="payment"
                        value="Net Banking"
                        onChange={this.handlePaymentMethods}
                        disabled
                      />
                      <label htmlFor="net">Net Banking</label>

                      <input
                        type="radio"
                        id="upi"
                        name="payment"
                        value="UPI"
                        onChange={this.handlePaymentMethods}
                        disabled
                      />
                      <label htmlFor="upi">UPI</label>

                      <input
                        type="radio"
                        id="wallet"
                        name="payment"
                        value="Wallet"
                        onChange={this.handlePaymentMethods}
                        disabled
                      />
                      <label htmlFor="wallet">Wallet</label>

                      <input
                        type="radio"
                        id="cash"
                        name="payment"
                        value="Cash on Delivery"
                        onChange={this.handlePaymentMethods}
                      />
                      <label htmlFor="cash">Cash on Delivery</label>
                    </div>
                    <div className="popup-btns">
                      <button
                        className="pop-btn-active"
                        type="button"
                        onClick={() => close()}
                      >
                        Cancel
                      </button>
                      <button
                        className={btnClass}
                        disabled={paymentMethod !== 'Cash on Delivery'}
                        onClick={this.onCheckout}
                        type="button"
                      >
                        Confirm Order
                      </button>
                    </div>
                    {successMessage && (
                      <p className="success">{successMessage}</p>
                    )}
                  </div>
                )}
              </Popup>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default CartSummary
