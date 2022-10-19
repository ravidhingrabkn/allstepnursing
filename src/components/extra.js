import React from "react";
import nurse from '../nurse.jpg';
import allstepnursingimage from '../allstepnursingimage.jpg';
import './About.css';

class Aboutpage extends React.Component {
    render() {
        return (
            <div className="row aboutpage">
                <h2>About Us</h2>
                <div className="myabout" >
                    <div className="col-sm-12 col-lg-6 aboutpara1">
                        <p >We can understand, how it would be for an International Educated Nurses to spend the money just to fill-out some forms. I have gone through the same spending alot of money just to get help from people who is already been through the same process. There are alot of fees associated on every step of the process which we cannot do anything about it i.e. all the nursing board and agency fees. But all we can do is to get the help in filling out forms. We can help you if you have any questions while filling out any form in any step you are.
                        </p>
                        <p>The only reason behind our mission is to help the nurses need, they all are enough capable in their field they just need the infomation which is why we are here.
                        </p>
                    </div>
                    <div className="col-sm-12 col-lg-6 text-center">
                        <img className="nursingimage img-responsive text-cente" src={allstepnursingimage} alt='nurseimage' />
                    </div >
                </div>
                <div className="realnurse">
                    <div className="col-sm-12 col-lg-4 ">
                        <figure className="text-center">
                            <img className="nurseimage img-responsive" src={nurse} alt='nurseimage' />
                            <figcaption >BSN, RN - HaltonHealthCare</figcaption>
                        </figure>
                    </div>
                    <div className=" col-sm-12 col-lg-8 shikhaaboutpara pd-10">
                        <p className="aboutpara2">Shikha Dhama, has 8+ years of experience as Registered Nurse. Shikha has worked in different different areas of her nursing experience and here areas of interest are Acute-care, Emergency and Operation theatre. Before moving to Canada, she has worked with one of the biggest hospitals in India i.e Fortis HealthCare, Mohali, Punjab. </p>
                        <p className="aboutpara3">After moving to Canada, she has limited knowledge of the process to become a Registered Nurse. There was no support available that guide her. There were a lot challenges while becoming a Registered Nurse. It was too expensive to go through the process. </p>

                        <h3>Achievements</h3>
                        <ul>
                            <li>CPNRE</li>
                            <li>CELBAN</li>
                            <li>NCLEX</li>
                        </ul>
                    </div>
                </div>
                <h2>What we do</h2>
                <ul>
                    <li>we will help you to fill all forms</li>
                    <li>If you have any questions related to process we will get you
                        all your answer</li>
                    <li>we will guide you how to prepare for NCLEX, CPNRE, CELBAN</li>
                    <li>interview preparation tips for LTC and Hospitals jobs</li>
                    <li>above all we don't charge you anything</li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><NavLink className="menulink" to="/" >Home</NavLink></li>
                    <li><NavLink className="menulink" to="/About">About</NavLink></li>
                    <li><NavLink className="menulink" to="/Exams">Exams</NavLink></li>
                    <li><NavLink className="menulink" to="/Contact">Contact Us</NavLink></li>
                </ul>
                <a href="/"><img className="logo" src={allstepnursinglogo} alt='logo' /></a>

                {/* ############### */}
                <div className='wrapper'>
                    <h2>Our Services</h2>
                    <div className='conatiner'>
                        <div className='boxe'>
                            <img src={nnas} alt='nnas logo' />
                            {/* <h3>NNAS</h3> */}
                            <p>National Nursing Assessment Services evaluates your documents if you have complete your nursing outside Canada. We will help you to complete yours forms or if you have any questions regarding your NNAS process.</p>
                            <a href='#' className='btn'>read more</a>
                        </div>
                    </div>
                    <div className='conatiner'>
                        <div className='boxe'>
                            <img src={celban} alt='celban logo' />
                            {/* <h3>CELBAN</h3> */}
                            <p>Canadian English Language Benchmark Assessment for Nurses (CELBAN) is an assessment tool designed to assess the English language proficiency of internationally educated nurses who are applying for licensure in the nursing profession in Canada.</p>
                            <a href='#' className='btn'>read more</a>
                        </div>
                    </div>
                    <div className='conatiner'>
                        <div className='boxe'>
                            {/* <img  src={nnas}  alt='nnas logo' /> */}
                            <h3 id='cpnre'>CPNRE | Rex-PN</h3>
                            <p>Canadian Practical Nurse Registration Examination (CPNRE) and The Regulatory Exam - Practical Nurse (REx-PN™) designed to become a Practical Nurse in Canada</p>
                            <a href='#' className='btn'>read more</a>
                        </div>
                    </div>
                    <div className='conatiner'>
                        <div className='boxe'>
                            <img src={nclex} alt='nclex logo' />
                            {/* <h3>NCLEX</h3> */}
                            <p>The National Council of State Boards of Nursing (NCSBN) develops the NCLEX exam to test the competency of nursing school graduates in the U.S. and Canada.</p>
                            <a href='#' className='btn'>read more</a>
                        </div>
                    </div>
                </div>
                {/* ###################### */}
                <div>
                    <h2 className="aboutheading">About Us</h2>
                    <div className="about">
                        <div className="col-sm-12 col-lg-6 about-items ">
                            <div>
                                <p >We can understand, how it would be for an International Educated Nurses to spend the money just to fill-out some forms. I have gone through the same spending alot of money just to get help from people who is already been through the same process. There are alot of fees associated on every step of the process which we cannot do anything about it i.e. all the nursing board and agency fees. But all we can do is to get the help in filling out forms. We can help you if you have any questions while filling out any form in any step you are.
                                </p>
                                <p>The only reason behind our mission is to help the nurses need, they all are enough capable in their field they just need the infomation which is why we are here.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6  text-center">
                            <img className="nursingimage" src={allstepnursingimage} alt='nurseimage' />
                        </div>
                    </div>
                    <div className="mynurse">
                        <div className="col-sm-12 col-lg-4 mynurseimage">
                            <figure className="text-center">
                                <img className="nurseimage" src={nurse} alt='nurseimage' />
                                <figcaption >BSN, RN - HaltonHealthCare</figcaption>
                            </figure>
                        </div>
                        <div className=" col-sm-12 col-lg-8">
                            <div>
                                <p >Shikha Dhama, has 8+ years of experience as Registered Nurse. Shikha has worked in different different areas of her nursing experience and here areas of interest are Acute-care, Emergency and Operation theatre. Before moving to Canada, she has worked with one of the biggest hospitals in India i.e Fortis HealthCare, Mohali, Punjab. </p>
                                <p >After moving to Canada, she has limited knowledge of the process to become a Registered Nurse. There was no support available that guide her. There were a lot challenges while becoming a Registered Nurse. It was too expensive to go through the process. </p>

                                <h3>Achievements</h3>
                                <ul>
                                    <li>Canadian Practical Nurse Registration Exam(CPNRE)</li>
                                    <li>Canadian English Language Benchmark Assessment for Nurses(CELBAN)</li>
                                    <li>National Council Licensure Examination(NCLEX)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Aboutpage;