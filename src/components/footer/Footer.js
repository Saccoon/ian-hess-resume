import React from 'react';

import './Footer.css';

const Footer = () =>
  <div className="Footer">
    <a href="tel:218-766-9421" target='_top'><p>(218)766-9421</p></a>
    <a href="mailto:mackythunem@gmail.com" target="_top"><p>mackythunem@gmail.com</p></a>
    <p className="NoMarginPrint">
      <span className="Bold NoPrint">Address</span><br />
      <span className="PrintSpace">2551 38th Ave NE #118,</span><br />
      <span className="PrintSpace">St Anthony MN, 55421</span>
    </p>
    <p className="NoPrint">©2018 Mackenzey Thunem</p>
  </div>
  
export default Footer;
