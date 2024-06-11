import Home from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Favorites } from "./Pages/Favorites";
import { Order } from "./Pages/Order";
import ProductInfo from "./Pages/ProductInfo";

//side bar
import Sidebar from "./components/Sidebar";
//react router dom
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favs" element={<Favorites />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/producto" element={<ProductInfo />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
const Root = () => {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
