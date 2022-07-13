import './App.css';
import { Route, Routes } from 'react-router-dom';

import NotFound from './Shared/NotFound/NotFound';
import Home from './Home/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Login from './Form/Login/Login';
import About from './About/About';
import Reviews from './Reviews/Reviews';
import Register from './Form/Register/Register';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import RequireAuth from './RequireAuth/RequireAuth';
import CheckOut from './CheckOut/CheckOut';
import ScrollToTop from 'react-scroll-to-top';
import WorkFlow from './WorkFlow/WorkFlow';
import AddProduct from './AddProduct/AddProduct';
import ManageProducts from './ManageProduct/ManageProducts';
import EditProduct from './EditProduct/EditProduct';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:serviceId" element={<ServiceDetails />} />
        <Route path="/checkOut" element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        } />
        <Route path="/review" element={<Reviews />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/manageProducts" element={<ManageProducts />} />
        <Route path="/editProducts/:id" element={<EditProduct />} />
        <Route path="/workFlow" element={<WorkFlow />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ScrollToTop smooth/>
    </div >
  );
}

export default App;
