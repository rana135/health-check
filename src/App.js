import './App.css';
import { Route, Routes } from 'react-router-dom';

import NotFound from './Shared/NotFound/NotFound';
import Home from './Home/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Login from './Form/Login/Login';
import About from './About/About';

function App() {
  return (
    <div>
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
