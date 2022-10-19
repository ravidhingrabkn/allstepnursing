import React from "react";
import nurse from '../nurse.jpg';
import allstepnursingimage from '../allstepnursingimage.jpg';
import './About.css';

class Aboutpage extends React.Component {
    render() {
        return (
            <div className='row nnassection'>
                <div className='col-lg-6 col-sm-12 aboutnnas' id="about">
                    <div className="aboutus">
                        <h2>About us</h2>
                        <div className="aboutusp">
                            <p >We can understand, how it would be for an International Educated Nurses to spend the money just to fill-out some forms. I have gone through the same spending alot of money just to get help from people who is already been through the same process. There are alot of fees associated on every step of the process which we cannot do anything about it i.e. all the nursing board and agency fees. But all we can do is to get the help in filling out forms. We can help you if you have any questions while filling out any form in any step you are.
                            </p>
                            <p>The only reason behind our mission is to help the nurses need, they all are enough capable in their field they just need the infomation which is why we are here.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 nnascoversection'>
                    <img className="nnascover" src={allstepnursingimage} alt='nurseimage' />                    
                </div>
            </div>
        )
    }
}
export default Aboutpage;