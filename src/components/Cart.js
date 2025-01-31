import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice"; // import clearCart action

const Cart = () => {
  // Correcting the useSelector hook to access cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch(); // Use dispatch to dispatch actions

  const handleClearCart = () => {
    // Dispatch the clearCart action to clear the cart
    dispatch(clearCart());
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">Your Cart</h1>
      <div className="mb-6">
        {/* Pass the cartItems to the ItemList component */}
        <ItemList items={cartItems} />
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleClearCart}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md transition duration-300"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
