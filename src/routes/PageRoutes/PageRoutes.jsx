import React from 'react';
import {Route, Routes} from "react-router-dom"
import About from "../../pages/About/About";
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage";
import Contact from "../../pages/Contact/Contact";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import Thali from "../../pages/Thali/Thali";
const PageRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thali" element={<Thali />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
            <Route path="*" element={<Error />} />
        </Routes>
        </>
    );
}

export default PageRoutes;
