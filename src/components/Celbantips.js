import React from 'react';
// import './Nnasdocuments.css';
import './Whatwedo.css';
import './Celbantips.css';
import Table from 'react-bootstrap/Table';

class Celbantips extends React.Component {
    render() {
        return (
            <section className="section services-section" id="documents">
            {/* <section className="section services-section" > */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2>Celban</h2>
                                {/* <p>We guide international trained nurses, how to become a nurse at no-cost.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <ul>
                                <li>
                                    Listening test - there is no specific number of questions but most of the conversations realted to between nurse and patients. So, its easily understandable and to get the required score.
                                </li>
                                <li>
                                    Reading test - medical blogs or topics, easy to get score 7 as compared to Ielts reading.
                                </li>
                                <li>
                                    Writing test - you will be given the case and you need to write the incident report.
                                </li>
                                <li>
                                    Speaking test - the examiner will act like a patient and would ask you questions about their health conditions. you just need to answer general questions related to medical terms.
                                </li>                                
                            </ul>
                            <p><span className='star'>*</span>We would recommend you to take Celban instead of Ielts.</p>
                            <p><span className='star'>**</span>If you need to practice your speaking, just book a free appointment and we will help you prepare for your speaking.</p>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Celban Exam</th>                                        
                                    </tr>
                                    <tr>                                        
                                        <th>Module</th>
                                        <th>Required Score</th>                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>                                        
                                        <td>Listening</td>
                                        <td>10</td>                                        
                                    </tr>
                                    <tr>                                        
                                        <td>Reading</td>
                                        <td>8</td>                                       
                                    </tr>
                                    <tr>                                        
                                        <td>Writing</td>
                                        <td>7</td>                                       
                                    </tr>
                                    <tr>                                        
                                        <td>Speaking</td>
                                        <td>8</td>                                       
                                    </tr>
                                    
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Celbantips;