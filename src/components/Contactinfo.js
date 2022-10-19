import React from "react";
import "./Contactinfo.css";
import contactaddimage from '../contactaddimage.png';
// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// import { Link } from "react-router-dom";

class Contactinfo extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <img className="contactaddimage img-responsive" src={contactaddimage} alt='ourservices' />
                    </div>
                    <div className="col-sm-12 col-lg-6  address">
                        <div>
                            <h3>Reach Us</h3>
                            <table>
                                <tr>
                                    <td><i className="fa-solid fa-phone"></i></td>
                                    <td>+1(647)425-5134</td>
                                </tr>
                                <tr>
                                    <td><i className="fa-solid fa-location-pin"></i></td>
                                    <td>1394 Farmstead Drive <br />
                                        Milton, Ontario<br />
                                        Canada, L9E1K4</td>
                                </tr>
                                <tr>
                                    <td><i className="fa-sharp fa-solid fa-envelope"></i></td>
                                    <td>ravidhingrabkn@outlook.com</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Contactinfo;