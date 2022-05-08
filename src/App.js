import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavSideBar from './Components/NavSideBar/NavSideBar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import MyItems from './Pages/MyItems/MyItems';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ProductManage from './Pages/ProductManage/ProductManage';
import NotFound from './Pages/NotFound/NotFound';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App text-slate-800 relative">
      <Header menuState={[isOpen, setIsOpen]} />
      <div className="grid grid-cols-[1px_1fr] md:grid-cols-[208px_1fr] ">
        <div className="relative">
          <NavSideBar menuState={[isOpen, setIsOpen]} />
        </div>
        <div className="bg-blue-100/25 mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/add-new" element={<AddNewItem />} />
            <Route path="/inventory/my-items" element={<MyItems />} />
            <Route path="/inventory/:id" element={<ProductManage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <ToastContainer autoClose={1500} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
