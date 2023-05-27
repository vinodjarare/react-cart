import { Link } from "react-router-dom";
import Logo from "../assets/react.svg";
import useCart from "../hooks/useCart";
const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <header className="h-12 flex justify-between items-center px-4 box-border border-b-2 border-gray-300 dark:bg-slate-900 dark:border-gray-700 dark:text-white">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <nav className="flex items-center gap-3 list-none">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart {cartItems.length}</Link>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
