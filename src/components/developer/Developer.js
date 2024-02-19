import React from 'react';
import '../../styles/developer.css'
import Chart from '../Chart';
function Developer() {
    return (
        <>
            <br></br>
            <center><h1 className='heading'>Developer Portal</h1></center>
            <br/>
            <center className='text-blob'>
                access our services as an API for your awesome applications!
                Premium users can access the development API for free!
                If you're going into production, and would like to increase your API limits, please contact us.
            </center>
            
            <br></br>

            <div className="dev-container">
                <Chart />

                <div className='col-container'>
                    <div className='api-token'>
                        <input type="text" placeholder="API Token" />
                        <button className='generate-btn'>Generate New Token</button>
                        <button className='copy'><img src='/copy-icon.png' /></button>
                    </div>

                    <br></br>
                    
                    <br></br>
                    <span className='docs-container'>
                        <img src='docs-icon.png' className='docs-icon' />
                        <a href='/developers/docs'>DOCS</a>
                    </span>
                    
                </div>
            </div>
        </>
    );
}

export default Developer;
