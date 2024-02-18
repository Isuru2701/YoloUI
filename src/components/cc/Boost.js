import React, { useEffect } from 'react';
import '../../styles/developer.css';
import Cookies from 'js-cookie';

function Boost() {
    useEffect(() => {
        // Check if cookies are set and match expected conditions
        if (
            Cookies.get('userRole') !== 'creator' ||
            Cookies.get('userEmail') === null ||
            Cookies.get('user') === null
        ) {
            window.location.href = '/';
        }
    }, []);

    const saveDataTest = (event) => {
        event.preventDefault();
        const formData = {
            content_type: document.getElementById('content-type').value,
            content_url: document.getElementById('content-url').value,
            keywords: document.getElementById('keywords').value.split(',').map((keyword) => keyword.trim()),
            creator_email: Cookies.get('userEmail'),
        };

        // Submit data as JSON POST request
        fetch('http://127.0.0.1:5000/content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert('Data saved! We will reach you soon.');
                } else {
                    alert('Something went wrong. Please try again later.');
                }
            })
            .catch((error) => {
                alert('Something went wrong. Please try again later.');
            });
    };

    return (
        <>
            <div className="content">
                {/* <!--this is where my content should go--> */}
                <div className="mob-area">
                    <div className="form-container">
                        <form id="content-form">
                            <p>Inquire</p>
                            <label htmlFor="content-type">Content Type:</label>
                            <select id="content-type" name="content-type">
                                <option value="song">Song</option>
                                <option value="youtube-video">YouTube Video</option>
                            </select>
                            <label htmlFor="content-url">Content Official URL:</label>
                            <input type="url" id="content-url" name="content-url" required />
                            <label htmlFor="keywords">Keywords:</label>
                            <div id="keywords-container">
                                <textarea id="keywords" name="keywords" rows="4" placeholder="Add keywords separated by commas"></textarea>
                            </div>
                            <button onClick={saveDataTest}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Boost;
