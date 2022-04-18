import './App.css';
import { Route, Routes } from 'react-router-dom';

import NotFound from './Shared/NotFound/NotFound';
import Home from './Home/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Login from './Form/Login/Login';
import About from './About/About';
import Blogs from './Blogs/Blogs';
import Reviews from './Reviews/Reviews';
import Register from './Form/Register/Register';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import RequireAuth from './RequireAuth/RequireAuth';
import CheckOut from './CheckOut/CheckOut';

function App() {
  return (
    <div>
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service/:serviceId" element={<ServiceDetails/>} />
        <Route path="/checkOut" element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        } />
        <Route path="/review" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
