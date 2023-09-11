import "./Footer.css";

import truckIcon from "../../Assets/foodTruck.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
export const Footer = () => {
  return (
    <section className="footer_section">
      <div className="footer_container">
        <div className="footer_section_img">
          <img src={truckIcon} alt="truck-icon" />
        </div>
        <div className="footer_section_contact">
          <p className="footer_headings">Contact Us</p>
          <p className="address">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p>
          <p>example2020@gmail.com</p>
          <p>(904) 443-0343</p>
        </div>
        <div className="footer_section_more">
          <p className="footer_headings ">More</p>
          <p>About Us</p>
          <p>Products</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>
        <div className="footer_section_social">
          <p className="footer_headings">Social Links</p>
          <span>© 2022 Food Truck Example</span>
          <div>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>
        </div>
      </div>
    </section>
  );
};
