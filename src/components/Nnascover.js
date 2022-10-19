import React from 'react';
import './Nnascover.css';
import nnas from '../images/nnas.jpeg';


class Nnascover extends React.Component {
    render() {
        return (
            <div className='row nnassection'>
                <div className='col-lg-6 col-sm-12 nnascoversection'>
                    <img className='nnascover' src={nnas} alt='ourservices' />
                </div>
                <div className='col-lg-6 col-sm-12 aboutnnas'>
                    <div>                        
                        <h2 className='nnas'>NNAS</h2>
                        <p className='nnasdef'>National Nursing Assessment Service is an agency that will access your documents if you are an international trained nurse. There are number of documents which you need to send it to them. Some of them would be send by you and others need to send by the college/nursing councils.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nnascover;