import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

const NotFound =() => {
    return(
        <div>
        <Header />
        <div className="container col-md-8 text-center">
        <h1 className="mt-5">404</h1>
        <h2 className="md-4">Not Found</h2>
        <p className="title md-5">ขออภัยไม่พบหน้าที่คุณค้นหา ดูเหมือนว่าหน้าเว็บที่คุณพยายามเข้าถึงไม่มีอยู่อีกต่อไปหรืออาจจะย้ายไป</p>
        </div>
        <Footer /> 
        </div>

    )
}
export default NotFound;