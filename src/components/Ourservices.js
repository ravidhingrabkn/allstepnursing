import React from 'react';
import './Ourservices.css';
import hinurse from '../hinurse.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Services extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-lg-5 col-sm-12 hinursecolumn'>
                    <img className="img-responsive hinurse" src={hinurse} alt='ourservices' />
                </div>
                <div className='col-lg-7 col-sm-12 list'>
                    <div>
                        <h2>What we do</h2>
                        <div id='serv'>
                        <ul>
                            <li>
                                <p>We will help you to fill all forms</p>
                            </li>
                            <li>
                                <p>If you have any questions related to process we will get you
                                all your answer</p>
                            </li>
                            <li>
                                <p>We will guide you how to prepare for NCLEX, CPNRE, CELBAN</p>
                            </li>
                            <li>
                                <p>Interview preparation tips for LTC and Hospitals jobs</p>
                            </li>
                            <li>
                                <p>Above all we don't charge you anything</p>
                            </li>
                        </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Services;