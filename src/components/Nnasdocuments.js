import React from 'react';
import './Nnasdocuments.css';
import './Whatwedo.css';

class Nnasdocuments extends React.Component {
    render() {
        return (
            // <div className='row nnasdocuments section-title '>
            //     <div className='container'>
            <section className="section services-section" id="documents">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2>Documents</h2>
                                {/* <p>We guide international trained nurses, how to become a nurse at no-cost.</p> */}
                            </div>
                        </div>
                    </div>
                    <ol>
                        <li>Identity Documents
                            <ul>
                                <li>Driver License</li>
                                <li>Passport (As an international applicant, we recommend to send a copy of your passport.)</li>
                                <li>The passport should be a clear copy of the original and needs to be notarized by the notary. There are free services available. please check on your city website or new comers website.</li>
                            </ul>
                        </li>
                        <li>Other documents
                            <ul>
                                <li>Nursing Education Form - Schools forms first need to filled by you, and send it to the school where you studied nursing. Note that: some colleges still don't know what is the form about. So make sure you communicate well with the school.</li>
                                <li>Nursing Practice/Employment Form - Not required if you not have worked in your home country. These forms will only generate when you mentioned it initially. </li>
                                <li>Nursing Registration Form - These forms needs to be send it to the council where you are Registered initially. find out if you can apply online or needs these documents to be send physically. </li>
                            </ul>
                        </li>
                        <li>All documents must be in English language. if you have any documents that is in different language will be first translated into English by certified translator.</li>
                    </ol>
                </div>
            {/* </div> */}
            </section>
        )
    }
}
export default Nnasdocuments;