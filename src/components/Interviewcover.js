import React from 'react';
import './Interviewcover.css';
import interview from '../images/interview.png'




class Interviewcover extends React.Component {
    render() {
        return (
            <div className='row nnassection'>
                <div className='col-lg-6 col-sm-12 nnascoversection'>
                    <img className='interviewimage' src={interview} alt='ourservices' />
                </div>
                <div className='col-lg-6 col-sm-12 aboutnnas'>
                    <div>                        
                        <h2 className='nnas'>Interview</h2>
                        <p className='nnasdef'>Interview is definitely a challenging task but don't worry our nurse will help you to prepare for your interview. If you need help regarding how to apply for a job, we will guide you on how to apply jobs in hospitals.</p>
                        <p>Send us a message, to get help for the interview.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Interviewcover;