import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // this.state = {date : new Date()};
    this.setState({ date: new Date() });
  }

  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-danger">
              <img style={{ height: 70 }} src="/images/logo/NijaLogo1.png" alt="" />{" "}
              NINJA AOME{" "}
            </h1>
          </div>
          <div className="col-md-4 text-right">
            <h5 className="text-danger mt-4">
              {this.state.date.toLocaleTimeString()}
            </h5>
          </div>
        </div>
        <hr />
        <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/orders">รายการสั่งซื้อ</a>  
  </li>
  <li class="nav-item">
    <a class="nav-link" href="products">สินค้า</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#">รายการสั่งซื้อ</a>
</li>
  <li class="nav-item">
  <a class="nav-link" href="about">Profile</a>
</li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Logout</a>
  </li>
</ul><hr />
      </div>
      
    );
  }
}

export default Header;
