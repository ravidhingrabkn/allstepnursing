import React from "react";
import "./Contact.css";
import Contactinfo from "./Contactinfo";
import PostForm from "./PostForm";
import contactimage from '../contactimage.jpg';
// import { Link } from "react-router-dom";

class Contactpage extends React.Component {
    render(){
        return(
            <div>
                {/* <div>
                    <img className="contactimage " src={contactimage}  alt='ourservices' />
                </div> */}
                {/* <div className="section">               */}
                    <div className="contactsection">
                        <PostForm className="postform"/>
                    {/* </div> */}
                </div>
                <div>  
                    <Contactinfo />
                </div>
            </div>         
        )
}
}
export default Contactpage;