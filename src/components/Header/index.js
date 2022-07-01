import React from "react";
import "./header.scss";
import Logo from "../../assets/images/1x/logo.png";
// import { PageContainer, ProCard } from '@ant-design';

const HeaderComponent = () => {
  return (
    <section>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" width="100%" height="100%" />
        </div>
        <div class="myNavbar d-flex">
          <div class="navi">
            <a href="#">Home</a>
          </div>
          <div class="navi">
            <a href="#">Services</a>
            <i class="fa-solid fa-caret-down"></i>

            <div class="mydropDownMenu">
              <a href="./assets/pages/websiteDesign/Development.html">
                <div class="dropDItem">
                  <p>Website Design  Development</p>
                </div>
              </a>
              <a href="./assets/pages/logo-design.html">
                <div class="dropDItem">
                  <p>Logo Design</p>
                </div>
              </a>
              <a href="./assets/pages/mobile-Application-Development.html">
                <div class="dropDItem">
                  <p>Mobile Application Development</p>
                </div>
              </a>
              <a href="./assets/pages/website-Maintenance-Services.html">
                <div class="dropDItem">
                  <p>Website Maintenance Services</p>
                </div>
              </a>
              <a href="./assets/pages/brand-Identity-Development.html">
                <div class="dropDItem">
                  <p>Brand Identity Development</p>
                </div>
              </a>
              <a href="./assets/pages/web-Application-Development.html">
                <div class="dropDItem">
                  <p>Web Application Development</p>
                </div>
              </a>
            </div>
          </div>
          <div class="navi">
            <a href="./assets/pages/portfolio.html">Portfolio</a>
          </div>
          <div class="navi">
            <a href="./assets/pages/aboutUs.html">About Us</a>
          </div>
          <div class="navi">
            <a href="./assets/pages/contactUs.html">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderComponent;
