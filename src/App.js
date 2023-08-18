import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";

import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import MoreDetails from "./pages/Account/MoreDetails";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import OrderPlaced from "./pages/payment/Payment";
import OrderHistory from "./pages/OrderHistory/OrderHistory";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      {/* <SpecialCase /> */}
      <ScrollRestoration />
      <Outlet />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/contact" element={<Contact />}></Route> */}
        {/* <Route path="/journal" element={<Journal />}></Route> */}
        {/* ==================== Header Navlink End here ===================== */}
        {/* <Route path="/offer" element={<Offer />}></Route> */}
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/orderplaced" element={<OrderPlaced />}></Route>
        <Route path="/orderhistory" element={<OrderHistory />}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/moredetails" element={<MoreDetails />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
