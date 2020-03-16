import React, { Component } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
        <Header />
        <div className= "container col-md-5">
        <h3>สวัสดีครับ</h3>
        <p className="title text-justify mt-4 md-4">
             NinjaAome
        </p>
        <h4 className="text-success">จาก NinjaAome</h4>
        </div>
        <Footer company="Olanlab" email="olan@olanlab.com" />
        </div>
    )
}
export default About;
