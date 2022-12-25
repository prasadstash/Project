import React from 'react';
import "./Footer.css";

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Roomies</h4>
                        <ui className="list-unstyled">
                            <li>342-420-6969</li>
                            <li>Pune, India</li>
                            <li>123 Street Hinjewadi</li>
                        </ui>
                    </div>
                    <div className="col">
                        <h4>Follow us on</h4>
                        <ui className="list-unstyled">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ui>
                    </div>
                    <div className="col">
                        <h4>Usefull links</h4>
                        <ui className="list-unstyled">
                            <li>Privacy Policy</li>
                            <li>Work with us</li>
                            <li>Career</li>
                            <li>Terms & Conditions</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row" >
                    <p className="col-md" >
                        &copy;{new Date().getFullYear()} Roomies | All rights reserved 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;