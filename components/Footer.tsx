import React from "react";
import LogoIcon from "./LogoIcon";

type Props = {};

const Footer = (props: Props) => {
  const shop = ["Home", "Women", "Men", "Kid", "Popular Brand"];
  const shoes = [
    "All",
    "Running",
    "Basketball",
    "Football",
    "Lifestyle",
    "Jordan",
    "Gym & Training",
  ];
  const company = [
    "FAQ",
    "Term of Use",
    "Privacy",
    "About",
    "Affiliate Program",
    "Suistainability Hub",
  ];
  const contact = [
    { title: "Email", subtitle: "sales.smh@smh.com" },
    { title: "Telephone", subtitle: "086749349284" },
    {
      title: "Address",
      subtitle: "1588 South Coast Drive Costa Mesa, CA 92626",
    },
    {
      title: "Hours",
      subtitle: `
        Mon - Fri (9 am - 9 pm) <br /><br />
        Sat - Sun (11 am - 9pm)`,
    },
  ];
  const sosmed = ['facebook', 'twitter', 'instagram']
  return (
    <footer className="mt-40 bg-black pt-14">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-list">
            <p className="title">SHOP</p>
            <ul className="list">
              {shop.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="footer-content-list">
            <p className="title">SHOES</p>
            <ul className="list">
              {shoes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="footer-content-list">
            <p className="title">COMPANY</p>
            <ul className="list">
              {company.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="footer-content-list">
            <p className="title">CONTACT</p>
            <ul className="list-contact">
              {contact.map((item) => (
                <li key={item.title}>
                  <p className="title">{item.title}</p>
                  <p className="subtitle" dangerouslySetInnerHTML={{ __html: item.subtitle }}></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <LogoIcon fill="white" width={85} height={29} className="mr-5"></LogoIcon>
          <p>EST 1978 - {new Date().getFullYear()}</p>
          <ul className="footer-sosmed">
            {sosmed.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
