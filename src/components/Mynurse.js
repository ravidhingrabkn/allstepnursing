import React from 'react';
// import './Nnasdocuments.css';
import nurse from '../nurse.jpg';
import './Mynurse.css';



class Mynurse extends React.Component {
    render() {
        return (
            <section className="section services-section" id="documents">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-4 nnascoversection">
                            <figure className="text-center">
                                <img className="mynurse" src={nurse} alt='nurseimage' />
                                <figcaption >BSN, RN - HaltonHealthCare</figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-12 col-lg-8 mynursedetail">
                            <div>
                                <p><strong>Shikha Dhama</strong>, has 8+ years of experience as Registered Nurse. Shikha has worked in different different areas of her nursing experience and here areas of interest are Acute-care, Emergency and Operation theatre. Before moving to Canada, she has worked with one of the biggest hospitals in India i.e Fortis HealthCare, Mohali, Punjab. </p>
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
            </section>
        )
    }
}
export default Mynurse;