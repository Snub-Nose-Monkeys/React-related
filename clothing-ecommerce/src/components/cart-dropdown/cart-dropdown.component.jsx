import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  OverflowScroll,
} from "./cart-dropdown.styles.jsx";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length > 3 ? <OverflowScroll /> : <></>}
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

// const CartDropdown = () => {
//   const { cartItems } = useContext(CartContext);

//   return (
//     <div className="cart-dropdown-container">
//       <div className="cart-items">
//         {cartItems.length ? (
//           cartItems.map(cartItem => (
//             <CartItem key={cartItem.id} cartItem={cartItem} />
//           ))
//         ) : (
//           <span className="empty-message">Your cart is empty</span>
//         )}
//       </div>
//       <Button>GO TO CHECKOUT</Button>
//     </div>
//   );
// };

export default CartDropdown;
