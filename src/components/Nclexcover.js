import React from 'react';
import './Nnascover.css';
import nclex from '../images/nclexcover.png';

class Nclexcover extends React.Component {
    render() {
        return (

            <div className='row nnassection'>
                <div className='col-lg-6 col-sm-12 nnascoversection'>
                    <img className='nnascover' src={nclex} alt='ourservices' />
                </div>
                <div className='col-lg-6 col-sm-12 aboutnnas'>
                    <div>
                        <h2 className='nnas'>NCLEX</h2>

                        <p>To become a Registered Nurse in Canada, you need to take the NCLEX exam to test the competency of nursing graduates and it's computer adaptive exam. The National Council of State Boards of Nursing(NCSBN) develops the NCLEX exam and it is widely acceptable all over Australia, Canada and USA. </p>
                    </div>
                </div>
            </div>

        )
    }
}
export default Nclexcover;