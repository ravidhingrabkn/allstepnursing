import React from 'react';
// import './Nnasdocuments.css';
import './Nclexexams.css';
import nclexexam from '../images/nlexexam.jpeg';
import './Whatwedo.css';
import './Celbantips.css';


class Nclexexam extends React.Component {
    render() {
        return (
            <section className="section services-section" id="documents">
                {/* <section className="section services-section" > */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2>Nclex Exam Tips</h2>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 nclexexam">
                            <ul>
                                <li>Recommend resources
                                    <ul>
                                        <li>Saunder's Comprensive Nclex Review book</li>
                                        <li>UWorld</li>
                                        <li><a href={'https://www.youtube.com/channel/UCyz-CbxobLkt-_3Q6-B-zpA'} target={"_blank"}>Klimek Reviews</a></li>
                                        
                                    </ul>
                                </li>
                                <li>
                                    Self study will help you prepare for the exams.  
                                </li>
                                <li>
                                    Rationals in the book are important, read carefully and study more about rationals itself.
                                </li>
                                <li>
                                   Approximately 3 months of study will prepare you enough to pass the exam.
                                </li>
                            </ul>
                            <p><span className='star'>*</span>if you have more questions, just send us a message</p>
                            
                        </div>
                        <div className="col-sm-12 col-lg-6 nnascoversection">
                            <img className='nclexexamimage' src={nclexexam} alt='ourservices' />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Nclexexam;