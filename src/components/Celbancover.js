import React from 'react';
import './Nnascover.css';
import celbanwll from '../images/CELBANWLL.png';

class Celbancover extends React.Component {
    render() {
        return (
            // <div className='col-lg-6 col-sm-12 nnascoversection'>
            //         <img className='nnascover' src={celbanwll} alt='Celban' />
                   
            //     </div>
            <div className='row nnassection'>
                <div className='col-lg-6 col-sm-12 nnascoversection'>
                    <img className='nnascover' src={celbanwll} alt='ourservices' />
                </div>
                <div className='col-lg-6 col-sm-12 aboutnnas'>
                    <div>                        
                        <h2 className='nnas'>CELBAN</h2>

                        <p>Canadian English Language Benchmark Assessment for Nurses (CELBAN) is an assessment tool designed to assess the English language proficiency of internationally educated nurses who are applying for licensure in the nursing profession in Canada. CELBAN is recognized by nursing licensing bodies across Canada. The CELBAN Centre administers the CELBAN on behalf of the Centre for Canadian Language Benchmarks (CCLB) and Touchstone Institute.</p>
                    </div>
                </div>
            </div>
            )
        }
    }
    export default Celbancover;