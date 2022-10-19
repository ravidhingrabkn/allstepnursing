import React from "react";
import { Link } from "react-router-dom";
import nursebanner from '../nursebanner.jpg';
import '../index.css';
import Banner from '../components/Bannerpage';
import Services from '../components/Ourservices';
import Whatwedo from "../components/Whatwedo";

function Home() {
  return(
    <div>
      <Banner />
      
      {/* <img className="topbanner img-responsive" src={nursebanner} alt='nursebannerimage' /> */}
      <Services />   
      <Whatwedo />        
      {/* <h1>Welcome to All Step Nursing</h1>
      <p>Some random content...</p> */}
      {/* <Link to="/about">About link</Link> */}
    </div>
  )
}
export default Home;