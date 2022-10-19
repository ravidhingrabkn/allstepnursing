import React from 'react';
// import style from './СomponentStyle.styl';
import '@coreui/coreui/dist/css/coreui.min.css'
import { Link } from "react-router-dom";
import './Whatwedo.css';
import nnas from '../images/nnas.png';
import celban from '../images/CELBAN.png';
import nclex from '../images/nclex.png'
import rexpn from '../images/rex-pn.png'
import interview from '../images/interview.png'



class Whatwedo extends React.Component {
    render() {
        return (
            // <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">

            <section className="section services-section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2>Services</h2>
                                <p>We guide international trained nurses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-sm-6 col-lg-4">
                            <Link to="/nnas" className='link'>
                                <div className="feature-box-1">
                                    <div>
                                        <img className='rexpn' src={nnas} alt='nnas logo' />
                                    </div>
                                    <div className="feature-content">

                                        <p>National Nursing Assessment Services evaluates your documents if you have complete your nursing outside Canada. We will help you to complete yours forms or if you have any questions regarding your NNAS process.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <Link to="/celban" className='link'>
                                <div className="feature-box-1">
                                    <div>
                                        <img className='rexpn' src={celban} alt='celban logo' />
                                    </div>
                                    <div className="feature-content">

                                        <p>Canadian English Language Benchmark Assessment for Nurses (CELBAN) is an exam to assess the English language proficiency of internationally educated nurses who are applying for licensure in the nursing profession in Canada.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-sm-12 col-lg-4">
                            <Link to="/cpnre" className='link'>
                                <div className="feature-box-1">
                                    <div>
                                        <img className='rexpn' src={rexpn} alt='Rex-pn logo' />
                                    </div>
                                    <div className="feature-content">

                                        <p>Canadian Practical Nurse Registration Examination (CPNRE) and The Regulatory Exam - Practical Nurse (REx-PN™) designed to become a Practical Nurse in Canada</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <Link to="/nclex" className='link'>
                                <div className="feature-box-1">
                                    <div>
                                        <img className='rexpn' src={nclex} alt='nclex logo' />
                                    </div>
                                    <div className="feature-content">

                                        <p>The National Council of State Boards of Nursing (NCSBN) develops the NCLEX exam to test the competency of nursing school graduates in the U.S. and Canada.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <Link to="/interview" className='link'>
                                <div className="feature-box-1">
                                    <div >
                                        <img className='rexpn' src={interview} alt='interview logo' />
                                    </div>
                                    <div className="feature-content">

                                        <p>We understand how difficult it would for the international trained nurse to get their first feet as a nurse in the hospital and LTC in Canada. our trained nurse will help you prepare for the interview preparation.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
export default Whatwedo;