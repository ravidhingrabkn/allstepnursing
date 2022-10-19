import React from 'react';
import './Bannerpage.css';
import { Link } from "react-router-dom";
import $ from 'jquery'
import nursebanner from '../nursebanner.jpg';

class Banner extends React.Component {
  jQuerycode = () => {
    $(".jumbotron").css({ height: $(window).height() + "px" });

    $(window).on("resize", function () {
      $(".jumbotron").css({ height: $(window).height() + "px" });
    });
  }

  componentDidMount() {
    this.jQuerycode()
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container ">
          <h1 className="display-1 ">AllStep Nursing</h1>
          <p className='subheading'>A place where you can trust in fulfilling your nursing career</p>

          <Link to="/contact" class="button1">Contact</Link>

        </div>

      </div>
    )
  }
}

export default Banner;