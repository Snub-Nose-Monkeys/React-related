import Home from "./rountes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./rountes/navigation/navigation.component";
import Authentication from "./rountes/authentication/authentication.component";
import Shop from "./rountes/shop/shop.component";
import Checkout from "./rountes/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
