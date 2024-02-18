import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import Cookies from 'js-cookie';
import '../../styles/developer.css';

function Developer() {
    const [apiKey, setApiKey] = useState('');
    const [usedQuota, setUsedQuota] = useState(0);

    useEffect(() => {
        getUsage();
    }, []);

    const getApiKey = () => {
        const requestData = {
            email: Cookies.get("userEmail"),
            hash: Cookies.get("userPassword")
        };

        fetch('http://127.0.0.1:5000/developers/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
            .then(response => response.json())
            .then(data => {
                alert("New API Key Generated, Please Save it!");
                setApiKey(data.api_key);
            })
            .catch(error => {
                console.error('Error execution', error);
            });
    };

    const getUsage = () => {
        fetch('http://127.0.0.1:5000/developers/usage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: Cookies.get('userEmail') }),
        })
            .then(response => response.json())
            .then(data => {
                setUsedQuota(data.request_count);

                const chartData = {
                    labels: ["USED", "FREE QUOTA"],
                    datasets: [{
                        data: [data.request_count, 100],
                        backgroundColor: ["#FF6384", "#36A2EB"],
                        hoverBackgroundColor: ["#FF6384", "#36A2EB"]
                    }]
                };

                const options = {
                    responsive: true
                };

                const canvas = document.getElementById("pieChart");

                new Chart(canvas, {
                    type: 'pie',
                    data: chartData,
                    options: options
                });
            })
            .catch(error => {
                console.error('Error execution', error);
            });
    };

    const togglePopup = () => {
        const popup = document.getElementById("popup");
        popup.style.display = popup.style.display === "none" ? "block" : "none";
        getUsage();
    };

    const copyText = () => {
        // Implement copyText logic if needed
    };

    return (
        <>
            <div className="content">
                <div className="pop" onClick={togglePopup}><i className='bx bxs-hand-right'></i></div>
                <div className="mob-area">
                    <h2>Hey Developers</h2>
                    <input type="text" value={apiKey} readOnly id="inputField" />
                    <button className="generate" onClick={getApiKey}>Generate me a New API Token</button>
                    <button onClick={copyText} className="copy"><i className='bx bxs-copy'></i></button>
                    <div className="more">
                        <div className="usage" onClick={togglePopup}>
                            <a>
                                <i className='bx bx-line-chart ics'></i>
                                <br />
                                <span>View Usage </span>
                            </a>
                        </div>
                        <img src="assets/line (2).png" alt="" />
                        <div className="docs">
                            <a href="docs.html">
                                <i className='bx bxs-file-doc ics'></i>
                                <br />
                                <span>Read Docs </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup" id="popup">
                <div className="popup-content">
                    <span className="close-popup" onClick={togglePopup}>&times;</span>
                    <div className="use">My API Usage</div>
                    <canvas id="pieChart"></canvas>
                </div>
            </div>
            <img src="assets/load.gif" alt="" className="load" />
            <div className="overlay"></div>
        </>
    );
}

export default Developer;
